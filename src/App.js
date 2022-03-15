// import logo from './logo.svg';
import './App.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import React from 'react'
import Debounce from './Debouncing/WithoutDebounceWithClassComp';
import WithDebouncingWithClass from './Debouncing/DebouncingWithClassComp';
import WithoutDebouncingWithHooks from './Debouncing/WithoutDebouncingwithHooks';
import DebouncingWithHooks from './Debouncing/DebouncingWithHooks';
import User from './component/User/user';
function App() {
  const [text,setText] = useState('')
  const [taskList,setTaskList] = useState([])
  const handleTask=(e)=>{
    setText(e.target.value.toUpperCase())
  }
  const handleClick = ()=>{
    if(text && !taskList.includes(text)){
      taskList.push(text)
      setTaskList([...taskList])
    }
    else{
      taskList.includes(text) ? alert('Repeated task not allowed') :alert('Please enter task')
    }
  }
  const handleDelete = ()=>{
    if(taskList.length){
      taskList.pop(taskList[taskList.length-1])
      setTaskList([...taskList])
    }
    else{
      alert('No Task available')
    }

  }
  const handleTaskDelete = (ind)=>{
    taskList.splice(ind,1)
    setTaskList([...taskList])
  }
  return (
    <>
    <div className="App">
      {/* <header className="App-header"> */}
        Task: 
        <input type="text" value={text} onChange={handleTask}/>
        <button onClick={handleClick}>Add</button>  
        <button onClick={handleDelete}>Delete</button>  
      {/* </header> */}
    </div>
    <div>
    {/* {
      <ul>
        {
    taskList.map((task,ind)=>{
      return <li>
      {task}
      <div><HighlightOffIcon style={{paddingLeft:'90%',color:'red',position:'relative'}}/></div>
      <hr/>

      </li>
     
    })
        }
      </ul>
  
    } */}

    <table width="100%">
      <thead>
        <tr>
        <th>Task</th>
        <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
      taskList.length ? taskList.map((task,ind)=>{
            return <React.Fragment key={ind}>
            <tr>
            <td style={{textAlign:'center'}}>{task}</td>
            <td style={{textAlign:'center'}}>{<HighlightOffIcon style={{color:'red'}} onClick={()=>handleTaskDelete(ind)}/>}</td>
            </tr>
            </React.Fragment>
          })
          : <tr>
          <td style={{textAlign:'center'}}></td>
          <td style={{textAlign:'left',paddingLeft:'15px'}}>{'No Data Available'}</td>
          </tr>
        }
      </tbody>
    </table>
    </div>
    {/* <Debounce/> */}
    {/* <WithDebouncingWithClass/> */}
    {/* <WithoutDebouncingWithHooks/> */}
    <DebouncingWithHooks/>
    {/* <User/> */}
    </>
  );
}

export default App;
