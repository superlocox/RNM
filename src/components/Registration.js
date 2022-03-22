import React,{Fragment, useState} from 'react';
import "./Login.css"
import axios from "axios";

function Registration() {

    const [username, setUsername] = useState([]);
    const [password, setPw] = useState([]);

    const initialValues = {
        username: "",
        password: "",
    };


  const onSubmit = () => {
    axios.post("http://localhost:3001/registration", {username: username,password:password}).then(() => {
      console.log('Success');
    });
  };

  return (
    <Fragment>
            <form className="box"   >
            <h1>Registration</h1>
            {/* <div></div> */}
            <input type="text" name="" placeholder="Username" 
            onChange={(e)=>{setUsername(e.target.value)}}/>


            <input type="password" name="" placeholder="Password"
            onChange={(e)=>{setPw(e.target.value)}}/>

            {/* <input type="password" name="" placeholder="Confirm Password"
            onChange={(e)=>{setPwc(e.target.value)}}/>
             */}
            {/* <input type="submit" name="" value="Register" onClick={(onSubmitForm)=>{
                // props.history.push("/");
                // Auth.login(()=>{
                //     props.history.push("/l");
                // })
            }}/>     */}

            <input type="submit" name="" value="Register"onClick={onSubmit} />    
            <h5>Have account? </h5>
            <input type="submit" name="" value="Login" onClick={()=>{
          
        
            }}/>

            </form>
        </Fragment>
  );
}

export default Registration;