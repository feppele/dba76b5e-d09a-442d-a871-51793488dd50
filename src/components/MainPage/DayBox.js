import classes from './DayBox.module.css';

import EventBox from './EventBox'

function DayBox(props){

    const allEvents = props.allEventsFromThisDay;
    const day = allEvents[0].date;

    // window.addEventListener("scroll", ()=>{

    //     if(document.getElementById("day").getBoundingClientRect().top <= 75){
    //         document.getElementById("day").className = classes.stickyDay
    //     }

    // });

    return (
        <div className={classes.container}>

            <div id="day" className={classes.day}>
                {day}
            </div>

            <div className={classes.gridBox}>

                {allEvents.map(event => <EventBox eventData={event}/> )}

            </div>

        </div>
    );
}

export default DayBox;