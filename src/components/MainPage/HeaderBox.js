import classes from './HeaderBox.module.css';

import britishFlag from '../../images/british.png'

function HeaderBox(props){

    const firstDate = props.eventPeriod.firstDate
    const lastDate = props.eventPeriod.lastDate


    return (
        <div className={classes.container}>

            <div className={classes.box}>

                <div className={classes.textBox}>

                    <img src={britishFlag} className={classes.flagImg}></img>
                    London

                </div>

                <div className={classes.textBox}>

                    {firstDate} - {lastDate}

                </div>

            </div>

            <div className={classes.header}>
                Public Events
            </div>






        </div>
    );
}

export default HeaderBox;