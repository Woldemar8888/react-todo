import React, {useState} from "react";
import PropTypes from 'prop-types';
const styles =  {
    form:{
       marginBottom: '1rem'
    },
    inputText:{
        padding: '7px',
        width: '460px',
        boxSizing: 'border-box'
    },
    inputSubmit:{
        padding: '7px',
        width: '140px'
    }
}

function AddTodo({onCreate}){
    const [value, setValue] = useState('')
    function  submitHandler(event){
        event.preventDefault()
        if(value.trim()){
          onCreate(value);
          setValue('');
        }
    }
   return(
       <form style={styles.form} onSubmit={submitHandler}>
           <input
               value={value}
               onChange={event => setValue(event.target.value)}
               style={styles.inputText}/>
           <input type="submit" value="add todo"
                style={styles.inputSubmit}
           />
       </form>
   )
}

AddTodo.propTypes = {
   onCreate : PropTypes.func.isRequired
}
export default AddTodo