import React,{Fragment, useState, useEffect} from 'react';
// import Auth from './Auth';
import "./Task.css"
import Axios from 'axios';


export const Task = props => {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [Newtodo, setNewTodo] = useState('');
   
    const addTask = e =>{
        Axios.post('http://localhost:3001/addtask', {task:todo, user_id: 1})
        .then(()=>{
            setTodos(...todos,{task:todo, user_id: 1})
            console.log('Success');
        })
    }

    const deleteTodo = (id) => {
     
        Axios.delete(`http://localhost:3001/deletetask/${id}`).then(()=>{
            setTodos(todos.filter((todo) => todo.id !== id));
            console.log('Success');
        })
    }

    const editTodo = (id) => {
     
        Axios.put('http://localhost:3001/edittask',{task: Newtodo,id:id}).then(()=>{
            setNewTodo("");
            getTodos();
            console.log('Success');
        })
    }

    const getTodos = () => {
        Axios.post('http://localhost:3001/getTodos', {user_id:1}).
        then((response)=>{
            setTodos(response.data);
        });
      }
    
      useEffect(() => {
        getTodos();
      }, []);
      
    
    const handleChange = e =>{
        setTodo(e.target.value);
        
    }

    return (
        <Fragment>
            <form className="todo-form"   >
                <input type="text" placeholder="Add a task" value={todo} name='text' className='todo-input' onChange={handleChange}/>
                <button className='todo-button' onClick={addTask}>Add task</button>
            </form>
            <div className="container ">
        <table className="table table-borderer table-hover mt-5 text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">Task</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo => (
              <tr key={todo.id}>
                <td>{todo.task}</td>
                <td><input type="text" onChange={(e) => setNewTodo(e.target.value)} />   <button className="btn btn-success" onClick={() => editTodo(todo.id)}>Edit</button></td>
             
                {/* <td><EditTodo todo={todo} /></td> */}
                <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </Fragment>

       
    );

}
   

 


  
export default Task;