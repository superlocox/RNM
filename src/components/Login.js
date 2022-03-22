import React,{Fragment, useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import Auth from './Auth';
import "./Login.css"
import Axios from 'axios';


export const Login = (props) => {

    

    const [username, setUsername] = useState([]);
    const [pw, setPw] = useState([]);

    //   const navigate = useNavigate();
    // const onSubmit = ()=>{
      
    //     navigate("/task");
    // }

    const onSubmitForm =  () => {

        Axios.post("http://localhost:3001/login", {username: username,password:pw}).then(() => {
      console.log('Success');
    });
        // e.preventDefault();
        // try {
        //     console.log('esto es');
        //   const body = {username,pw};
        //   //proxy is only use in development so it will be ignored in production
        //   //so if there is no http://localhost:5000 then by default it is going to use heroku domain
       
        //   // eslint-disable-next-line
        //   const response = await fetch("/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(body),
        //   });
        //  // console.log(response);
        //   window.location = "/";
        //  // alert('Se registró');
        // } catch (err) {
        //     console.log('entro err');
        //   console.error(err.message);   
        // }
      };

    return (
        <Fragment>
            <form className="box" onSubmit={onSubmitForm}  >
            <h1>Login</h1>
            <input type="text" name="" placeholder="Username"  onChange={(e)=>{setUsername(e.target.value)}}/>
            <input type="password" name="" placeholder="Password" onChange={(e)=>{setPw(e.target.value)}}/>
            <input type="submit" name="" value="Login" />
            <h5>Don't have account? </h5>
            {/* <input type="submit" name="" value="Registration" onClick={()=>{
          
                props.history.push("/regis");
        
            }}/> */}

<input type="submit" name="" value="Registration">
  
</input>
            </form>
        </Fragment>

       
    );

}
   

 


  
export default Login;