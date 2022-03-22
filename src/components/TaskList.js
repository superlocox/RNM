import React,{Fragment, useState} from 'react';
import Task from './Task';
// import Auth from './Auth';
import "./TaskList.css"



export const TaskList = props => {

    const [todos, setTodos] = useState([]);
   
    const handleSubmit = e =>{

        e.preventDefault();
        setTodos([]);

    }
    const handleChange = e =>{
        setTodos(e.target.value);
        
    }

    return (
        <div>
            <h1>Task List</h1>
            <Task/>
        </div>
    );

}
   

 


  
export default TaskList;