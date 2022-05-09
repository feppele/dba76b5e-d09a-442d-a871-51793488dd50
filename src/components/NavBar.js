import classes from './NavBar.module.css';
import { useHistory } from "react-router-dom";
import {useState} from 'react'
//components
import TextInput from './TextInput'
//img
import warenkorbImg from '../images/warenkorb.png';


//props.warenkorbCount is injected from App.js
function NavBar(props){

    const [isWarenkorb,setIsWarenkorb] = useState(false)

    const history =useHistory();
    function openWarenkorb(){
        setIsWarenkorb(true)
        history.push("/warenkorb")
    }
    function openMainPage(){
        setIsWarenkorb(false)
        history.push("/")
    }



    return (
        <div className={classes.container}>

            <div className={classes.logo} onClick={openMainPage}>
                london-events.com
            </div>

            <div className={classes.rightWrapper}>

            {/* SearchBar just on MainPage not on Warenkorb */}
            {!isWarenkorb && <input onKeyDown={props.search} type="text" placeholder="search ..." className={classes.textInput} ></input> }

                <div className={classes.warenkorbWrapper} onClick={openWarenkorb}>
                    <img src={warenkorbImg} className={classes.warenkorbImg}></img>

                    <div id="warenkorbAnzahl"className={classes.kreis}>
                        {props.warenkorbCount}
                    </div>
                </div>

            </div>




        </div>
    );
}

export default NavBar;