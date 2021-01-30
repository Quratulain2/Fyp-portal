import React from 'react'
import { Component } from 'react';
import "./Create_acc.css";


class Login extends Component{
render(){
    return(
        <div>
        <form className="container">
<div class="form-group">
 <h1 id="signUp">Login</h1>
 <br></br>
<label for="exampleInputEmail1" className="lab">Email address</label>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
{/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
</div>
<div class="form-group">
<label for="exampleInputPassword1" className="lab">Password</label>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
</div>
{/* <div class="form-check">
<input type="checkbox" class="form-check-input" id="exampleCheck1"/>
<label class="form-check-label" for="exampleCheck1">Check me out</label>
</div> */}

          
<a href="/about"> Forget Password?</a>         
<button type="submit" class="btn btn-primary">Login</button>


</form>

       </div>
//         <section>
//     <div className="form-container">
//         <h1 className="Log_In">Login Form</h1>
//         <form>
//             <div className="control">
//             <label >Email</label>
//              <input type="email" class="form-control" name="email" id="name" />
//              <div className="control">
//               <label >Password</label>
//               <input type="password" name="psw" class="form-control" id="psw" />
//                </div>
//                {/* <span><input type="checkbox" /> Remember Me </span> */}
//                <div className ="control">
//              <input type="submit" class="btn btn-primary" value="Log In" />
//               </div>
//             </div>

//         </form>
//         <div className="Loglink">
//            <a href="/about"> Forget Password?</a>
//                 </div>
 
//    </div>
//   </section>
 
 
   
    
    
    )
}
}
export default Login;