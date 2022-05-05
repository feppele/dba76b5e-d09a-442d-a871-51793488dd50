import classes from './NavBar.module.css';
import { useHistory } from "react-router-dom";
//components
import TextInput from './TextInput'
//img
import warenkorbImg from '../images/warenkorb.png';

function NavBar(){

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
                london-events.io
            </div>

            <div className={classes.rightWrapper}>

                <TextInput />

                <div className={classes.warenkorbWrapper} onClick={openWarenkorb}>
                    <img src={warenkorbImg} className={classes.warenkorbImg}></img>

                    <div id="warenkorbAnzahl"className={classes.kreis}>
                        0
                    </div>
                </div>

            </div>




        </div>
    );
}

export default NavBar;