import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useDataProvider } from "../providers/Data.provider";

function AddTask() {
  const { todoList , updateTodoList} = useDataProvider();
  const [TN, setTN] = useState('');
  const [TD, setTD] = useState('');

  const nav = useNavigate();

  const addingFunc =()=>{
    if(TN === undefined || TN === '')
    {
      alert('TaskName Must contain A Real Name!');
      return;
      
    }
    if(TD ==='' || TD === undefined){
      alert('TaskDescribe Must contain a full Description!')
      return;
    }
    const newTask = {
      taskName: TN,
      taskDescribe: TD,
      
    };
    updateTodoList([...todoList, newTask]);

    nav('/fulllist');
  }
  return (
    
    <form onSubmit={()=>{addingFunc()}}>
      <br /><br />
      <input style={{padding:'15px',backgroundColor:'transparent'}} onChange={(e)=>{setTN(e.target.value)}} type="text" placeholder='Enter Task Name'  minLength={2}/><br /><br />
      <input style={{padding:'15px',backgroundColor:'transparent'}} onChange={(e)=>{setTD(e.target.value)}} type="text" placeholder='Task description' minLength={10} /><br /> <br />
      <button style={{padding:'15px',backgroundColor:'transparent',fontWeight:'bolder'}}>Add Task</button>
    </form>
  )
}

export default AddTask