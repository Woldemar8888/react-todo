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

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue);
    return {
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo({onCreate}){
    const input = useInputValue('');
    function  submitHandler(event){
        event.preventDefault()
        if(input.value().trim()){
          onCreate(input.value());
          input.clear()
        }
    }
   return(
       <form style={styles.form} onSubmit={submitHandler}>
           <input {...input.bind}
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