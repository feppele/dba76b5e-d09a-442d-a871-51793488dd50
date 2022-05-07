import classes from './HeaderBox.module.css';
import {niceTime} from '../../helperFunctions'

import britishFlag from '../../images/british.png'

function HeaderBox(props){

    const firstDate = niceTime(props.eventPeriod.firstDate)
    const lastDate = niceTime(props.eventPeriod.lastDate)


    return (
        <div className={classes.container}>

            <div className={classes.text}> All public events</div>

            <div className={classes.box}>

                <div className={classes.textBox}>

                    <img src={britishFlag} className={classes.flagImg}></img>
                    London

                </div>

                <div className={classes.textBox}>

                    {firstDate.weekday} {firstDate.day} {firstDate.month} {firstDate.year} - {lastDate.weekday} {lastDate.day} {lastDate.month} {lastDate.year}

                </div>

            </div>

            


        </div>
    );
}

export default HeaderBox;