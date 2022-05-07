import classes from './NavBar.module.css';
import { useHistory } from "react-router-dom";
//components
import TextInput from './TextInput'
//img
import warenkorbImg from '../images/warenkorb.png';


//props.warenkorbCount is injected from App.js
function NavBar(props){

    const history =useHistory();
    function openWarenkorb(){
        history.push("/warenkorb")
    }
    function openMainPage(){
        history.push("/")
    }



    return (
        <div className={classes.container}>

            <div className={classes.logo} onClick={openMainPage}>
                london-events.com
            </div>

            <div className={classes.rightWrapper}>

            <input onKeyDown={props.search} type="text" placeholder="search ..." className={classes.textInput} ></input>

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