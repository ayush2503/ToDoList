import React, { useState } from 'react';
import Input from "./Components/Input/Input";
import Record from "./Components/Record/Record";
import Tasks from "./Components/Tasks/Tasks";
import css from "./App.module.css";

function App() {
  const data=JSON.parse(localStorage.getItem('data'))
  if(!data){
    localStorage.setItem('data',JSON.stringify([]))
  }


  const [tasks, settasks] = useState(data?data:[]);
  

  const updateLocal=(elem)=>{
    localStorage.setItem('data',JSON.stringify(elem))
    const data=JSON.parse(localStorage.getItem('data'))
    settasks(data)
  }
  
  
  // console.log(data)
  const addTask=(inp)=>{
    // console.log(inp.task.length)
    if(inp.task.length===0){return}
    const copydata=[...tasks]
    copydata.push(inp)
    console.log(copydata)
    
    
    updateLocal(copydata)
    
    // settasks(data)
  }

  const deleteHandler=(e)=>{
    console.log(e.target.id)
    const copy=[...tasks]
    copy.splice(Number(e.target.id),1)
    // setLocal(copy)
    updateLocal(copy)
    // settasks(data)
  }
 
  const onComplete=(index)=>{
    const copy=[...tasks]
    copy[index].compl=1
    // setLocal(copy)
    // settasks(copy)
    updateLocal(copy)
    // console.log(copy)
  }

  const complete=()=>{
    let a=0
    tasks.forEach(element => {
        a=a+element.compl
    });
    // console.log(a)
    return a
}

return <div className={css.main}>
    <div className={css.card}>
      <Record  complete={complete()} data={tasks} />
      <div className={css.wrapper}>

    <Tasks data={tasks} onComp={onComplete} deleteTask={deleteHandler}/>
      </div>
    <Input  add={(elem)=>addTask(elem)}/>
    </div>
  </div>;
}

export default App;
