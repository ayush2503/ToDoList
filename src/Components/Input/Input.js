import React,{useState} from 'react';
import css from './Input.module.css'
function Input(props) {
    const [inp, setinp] = useState({task:"",col:"",compl:0});
 
    const onChangeHandler=(e)=>{
        setinp({...inp,[e.target.name]:e.target.value})
    }

    const add_deleteInp=()=>{
        props.add(inp)
        const copy={task:"",col:"",compl:0}
        setinp(copy)
    }

    const colorHandler=(e)=>{
        setinp({...inp,[e.target.name]:e.target.value})
    }

  return <div  className={css.inputWrapper}>
    <input name="task" value={inp.task} type="text" onChange={onChangeHandler} />
    <div>
    <input type="color" id='clr'  name='col'  onChange={colorHandler} />
    
    <button onClick={add_deleteInp}>Add</button>
    </div>

</div>;
}

export default Input;
