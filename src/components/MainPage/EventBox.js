import classes from './EventBox.module.css';
import {useState} from 'react'
import {niceTime} from '../../helperFunctions'
//img
import loactionImg from '../../images/location.png'
import addImg from '../../images/plus.png'
import minusImg from '../../images/minus.png'
import startImg from '../../images/start.png'
//components
import MiniButton from '../MiniButton'
import FlyerOpenModal from '../FlyerOpenModal'


//props.eventData is injected from DayBox
//props.addButtonClicked is extracted to DayBox Comp.

//props.plusImg == true or false. if true the plusImg is used
function EventBox(props){


    const eventData=props.eventData

    const title = eventData.title
    const flyerURL = eventData.flyerFront
    const location = eventData.venue.name
    const startTime = niceTime(eventData.startTime)
    const endTime = niceTime(eventData.endTime)
    const googleMaps = eventData.venue.direction

    const [flyerModal,setFlyerModal] =useState(false)

    var popupText
    var plusMinusImg
    if(props.plusImg){
        plusMinusImg= addImg
        popupText="add to cart"
    }else{
        plusMinusImg= minusImg
        popupText="remove"
    }

    function openFlyer(){
        setFlyerModal(true)
    }
    function closeFlyer(){
        setFlyerModal(false)
    }
    function openMaps(){
        window.open(googleMaps)

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

                        <MiniButton onButtonClicked={openMaps} img={loactionImg} popupText={"open Maps"}/>


                    {location}
                </div>

                <div className={classes.dateBoxWithImg}>

                    <img src={startImg} className={classes.startImg}></img>

                    <div className={classes.dateBox}>

                        Start: {startTime.weekday} {startTime.time} <br/>
                        End: {endTime.weekday} {endTime.time}

                    </div>

                </div>



            </div>


            <div className={classes.buttonBox}>

                <MiniButton onButtonClicked={()=>props.addButtonClicked(eventData._id)} img={plusMinusImg} popupText={ popupText}/>

            </div>

        </div>
    );
}

export default EventBox;