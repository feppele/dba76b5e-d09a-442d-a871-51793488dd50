import classes from './MainPage.module.css';
import React, {useState,useEffect,useHistory} from 'react';

//components
import HeaderBox from '../components/MainPage/HeaderBox'
import DayBox from '../components/MainPage/DayBox'

//images


function MainPage(){


    const [allEvents,setAllEvents] = useState([])
    const [eventPeriod,setEventPeriod] = useState({})

    async function getData(){
        // fetch all events in JSON
        const events = await fetch("https://tlv-events-app.herokuapp.com/events/uk/london").then(res => {return res.json()})

        // get unique Days from all events
        var allDates = []
        events.forEach(ele =>{ allDates.push(ele.date)})
        var uniqueDates = allDates.filter((value, index, self) => {return self.indexOf(value) === index})

        // put all events which are on the same date in one array
        // create a array of all there arrays
        // [ [date1,date1] , [date2,date2] , ... ] 
        var eventsArray = []
        uniqueDates.forEach(date =>{
            eventsArray.push(events.filter(ele => ele.date==date ))
        })

        //sort the eventsArray by date from early to late
        var sortEventsArray= eventsArray.sort((date1, date2) => new Date(date1[0].date) - new Date(date2[0].date));
        //console.log(sortEventsArray)

        // set State "allEvents"
        setAllEvents(sortEventsArray)

        // determine date of first and last event for the header of the page
        // and set State "eventPeriod"
        setEventPeriod({firstDate: sortEventsArray[0][0].date,lastDate:  sortEventsArray[sortEventsArray.length-1][0].date})

    }


    useEffect(() => {
        getData()
    },[])

    return (
        <div className={classes.container}>

            <div className={classes.box}>

                <HeaderBox eventPeriod ={eventPeriod}/>

                {allEvents.map(allEventsFromOneDay => < DayBox allEventsFromThisDay={allEventsFromOneDay}  />  )}


            </div>

        </div>
    );
}

export default MainPage;