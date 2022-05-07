import classes from './Warenkorb.module.css';
import {useState,useEffect} from 'react'
import EventBox from '../components/MainPage/EventBox'

//props.warenkorbEvents from App.js
function Warenkorb(props){



    return (
        <div className={classes.container}>

            <div className={classes.header}> Warenkorb </div>


            <div className={classes.gridBox}>

                {props.warenkorbEvents.map(event => <EventBox addButtonClicked={props.callbackFromWarenKorbToApp} plusImg={false} eventData={event}/> )}

            </div>

        </div>
    );
}

export default Warenkorb;