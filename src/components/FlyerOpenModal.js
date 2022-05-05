import classes from './FlyerOpenModal.module.css';


function FlyerOpenModal(props){

    return (
        <div className={classes.backdrop} onClick={props.closeModal}>

            <img src={props.img} className={classes.img}></img>

        </div>
    );
}

export default FlyerOpenModal;