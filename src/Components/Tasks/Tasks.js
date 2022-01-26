import React from 'react';
import css from "./tasks.module.css"

function Tasks(props) {

    const data=JSON.parse(localStorage.getItem('data'))
    const render= data ? data :props.data
    const task=render.map((elem,index)=>{
        return   <li>
          <div key={index} id={index} className={css.task}>
        <p style={elem.compl?{ textDecoration: 'line-through' }:{color:elem.col}}>{elem.task}</p>
        <div>
           {/* <button className={css.btn} id={index} onClick={props.deleteTask}>Delete</button> */}
           <i class="ri-check-line" id={index} onClick={()=>props.onComp(index)} ></i>
           <i class="ri-close-line" id={index} onClick={props.deleteTask}></i>
           {/* <button id={index} onClick={()=>props.onComp(index)}>✅</button> */}

        </div>
       
      </div>
        </li>
    })



  return<>
    <ol>
      
        {task}  

      
    </ol>
  </>;
}

export default Tasks;
