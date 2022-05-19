import classes from './MainPage.module.css';
import React, {useState,useEffect,useHistory} from 'react';
import {Button,Input,ListItemButton,ListItemText,List,ListItemIcon} from '@mui/material';

import { create } from 'ipfs-http-client'



function MainPage(props){

    const [uploads,setUploads] = useState([])

    //document.cookie = "uploads=";

    function getCookies() {
        var cookies = document.cookie.split(';').reduce(
            (cookies, cookie) => {
                const [name, val] = cookie.split('=').map(c => c.trim());
                cookies[name] = val;
                return cookies;
            }, {});
        return cookies;
    }

    // add Upload-Array to Cookie
    function addUploads(newUpload){
        var uploads =getCookies().uploads || []

        if(newUpload === undefined ||newUpload === "") return
        uploads = uploads + "|" + newUpload

        document.cookie = `uploads=${uploads}`

    }

    // get Upload-Array from Cookie
    function getUploads(){
        var uploads =getCookies().uploads || ""
        return uploads.split("|")
    }

    // setUpload State with Upload array from Cookie
    useEffect(()=>{
        setUploads(getUploads())
    },[])


    const hiddenFileInput = React.useRef(null);
    function clickOnHiddenInput(event){
        hiddenFileInput.current.click(event);
    }

    async function uploadToIpfs(event){

        const uploadFile= event.target.files[0]
        var addUrl

        try {
            const client = create('https://ipfs.infura.io:5001/api/v0')
            const added = await client.add(event.target.files[0])
            addUrl = `https://ipfs.infura.io/ipfs/${added.path}`
        } catch (error) {
            console.log('Error uploading file: ', error)
        }

        // add Url Cookie-Array
        addUploads(addUrl)
        // add to State-Array
        setUploads([...uploads,addUrl])
    }


    return (
        <div className={classes.container}>
            <img className={classes.background} src={"https://wallpaperaccess.com/full/2154269.jpg"}></img>

            <div className={classes.uploadBox}>
                <input ref={hiddenFileInput} id ="imageInput" type="file" name="file" onChange={uploadToIpfs} hidden />
                <Button onClick={clickOnHiddenInput}  variant="contained">{"Choose file & upload to IPFS"}</Button>
            </div>

            <div className={classes.succsesfull}>


            </div>

            <div className={classes.allUploads}>

            <div className={classes.h1}> Your Uploads</div>

            <List reverse>

                {uploads.reverse().map(ele=> <ListItemButton component="a" href={ele} target="_blank">   <ListItemIcon><img className={classes.buttonImg} src={ele}/></ListItemIcon> <ListItemText primary={ele} /> </ListItemButton>

                )}


            </List>
            </div>


            
        </div>
    );
}

export default MainPage;