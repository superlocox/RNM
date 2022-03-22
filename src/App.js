import React, { Fragment } from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
// import { ProtectedRoute } from "./components/Protected.route";
import Login from "./components/Login";
import './App.css';

import TaskList from "./components/TaskList";
import Registration from "./components/Registration";

function App() {
  return (
 

   <BrowserRouter>
   <Routes>
   {/* <Route path="/" element={<Login/>} /> */}
   
   <Route path="/registration" element={<Registration/>} />
   <Route path="/" element={<TaskList/>} />
   <Route path="/login" element={<Login/>} />

   {/* <Route path="/" element={<Registration/>} /> */}

  <Route path="*" component={() => "404 NOT FOUND"} />
   </Routes>
   </BrowserRouter>
      
 
  );
}

export default App;
