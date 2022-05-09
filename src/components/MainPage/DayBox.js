import classes from './DayBox.module.css';
import { useState, useEffect, createContext, useContext } from "react";
import {niceTime} from '../../helperFunctions'
import EventBox from './EventBox'

//props.allEventsFromThisDay is injected from MainPage
//props.addButtonClicked is injected from EventBox. When addButton isClicked in EventBox Comp. This Box gets deleted from DayBox
//props.callbackFromDayBoxToApp (function) is injected from MainPage and MainPage gets this function from App.js
//DayBox creates a GridBox filled with EventBoxes
function DayBox(props){

    const [allEvents,setAllEvents] = useState(props.allEventsFromThisDay)

    // When props change update allEvents
    useEffect(()=>{
        setAllEvents(props.allEventsFromThisDay)    
    },[props])

    // when EventBoxes are added to cart they are deletet from the "allEvents"-Array.
    // if "allEvents"-Array is empty return null
    if(allEvents.length === 0){return}

    const day = niceTime(allEvents[0].date);

    // renew "allEvents" from this day. Delete the eventBox on which the addButton was clicked
    // the eventBox on which the addButton was clicked sends its eventId with
    function addToCartAndRemove(eventId){

        // gives warenkorbEvents to --> MainPage -->App.js
        props.callbackFromDayBoxToApp(allEvents.filter(event=>event._id==eventId)[0])

        // remove EventBox with "eventId" from "allEvents"-Array
        setAllEvents( allEvents.filter(event=>event._id!=eventId))
        // push Event to warenkorbEvents

    }


    


    return (
        <div className={classes.container}>

            <div id="day" className={classes.day}>
                {day.weekday} {day.day} {day.month}
            </div>

            <div className={classes.gridBox}>

                {allEvents.map(event => <EventBox plusImg={true} addButtonClicked={addToCartAndRemove}  eventData={event}/> )}

            </div>

        </div>
    );
}

export default DayBox;