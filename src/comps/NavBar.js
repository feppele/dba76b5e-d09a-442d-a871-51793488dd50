import classes from './NavBar.module.css';
import React, {useState,useEffect,useHistory} from 'react';


function NavBar(props){



    return (
        <div className={classes.container}>

            <div className={classes.logo} onClick={()=> window.location.reload()}>
                upload-to-ipfs.com
            </div>


        </div>
    );
}

export default NavBar;