import classes from './TextInput.module.css';

function TextInput(props){



    return (

        <input type="text" placeholder="search ..." className={classes.textInput}></input>

    );


}

export default TextInput;