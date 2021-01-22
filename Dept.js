import React from 'react'
import { Component } from 'react';
import "./Dept.css";
import Login from "./Login";
import AdminBar from "./Admin_bar";
import "./Create_acc.css";
//  import "./test.css";

 


class Dept extends Component{
  
  // constructor(props){
  //   super(props);
  //   this.state={
  //     setClass:'topnav'
  //   }
  // }

 render(){

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
    return(
        <div className="content">
        {/* <div className ="sidebar">
  <a className = "active" href="#home" >Profile</a>
  <a href= "#news" >Update</a>
  <a href= "#contact" >Delete</a>
  <a href= "#about" >Data View</a>
</div> */}
{/* <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Profile</a>
  <a href="#news">Create</a>
  <a href="#contact">Delete</a>
  <a href="#about">Data View</a>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i className="fa fa-bars"></i>
  </a>
</div> */}


{/* <AdminBar/> */}
{/* <form className="container">
<h1 className="Pass" >Change Password</h1>
<div className="icontrol">
            <label >Current Password</label>
             <input type="password" name="dept_name" id="dept_name" />
             <div className="icontrol">
              <label >New password</label>
              <input type="password" name="chair_name" id="chair_name" />
               </div>
               <div className="icontrol">
              <label >Re-enter new password</label>
              <input type="password" name="vicechair_name" id="vicechair_name" />
               </div>
              
               <div className ="icontrol">
             <input type="submit" value="Done" />
              </div>
            </div>
</form>  */}
<form className="container">
  <div class="form-group">
      <h1 id="signUp">Change Password</h1>
      <br></br>
    <label for="exampleInputEmail1" className="lab">Email address</label>
    <input type="email" class="form-control-plaintext" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1"  className="lab">Current Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Current Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">New Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="New Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1" className="lab">Re-enter New Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter"/>
  </div>
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Save</button>
</form>
</div>
 
 
   
    
    
    )
}
}
export default Dept;