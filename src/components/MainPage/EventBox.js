import classes from './EventBox.module.css';
import {useState} from 'react'

//img
import loactionImg from '../../images/location.png'
import addImg from '../../images/plus.png'
//components
import MiniButton from '../MiniButton'
import FlyerOpenModal from '../FlyerOpenModal'

function EventBox(props){

    const eventData=props.eventData

    const title = eventData.title
    const flyerURL = eventData.flyerFront
    const location = eventData.venue.name
    const startTime = eventData.startTime
    const endTime = eventData.endTime

    const [flyerModal,setFlyerModal] =useState(false)

    function openFlyer(){
        setFlyerModal(true)
    }
    function closeFlyer(){
        setFlyerModal(false)
    }

    return (
        <div className={classes.container}>

            { flyerModal && <FlyerOpenModal img={flyerURL} closeModal={closeFlyer} /> }

            <div className={classes.top}>

                {title}

            </div>

            <div className={classes.middle}>

                <img src={flyerURL} className={classes.img} onClick={openFlyer}></img>

            </div>

            <div className={classes.bottom}>

                <div className={classes.locationBox}>
                    <img src={loactionImg} className={classes.locationImg}></img>


                    {location}

                </div>

                <div className={classes.dateBox}>

                    Start: {startTime} <br/>
                    End: {endTime}

                </div>



            </div>


            <div className={classes.buttonBox}>

                <MiniButton img={addImg} popupText={"add to cart"}/>

            </div>

        </div>
    );
}

export default EventBox;