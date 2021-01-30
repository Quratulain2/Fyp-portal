//Not for use 
import React, { Component } from 'react'
// import { Button } from 'react-bootstrap';
import {MenuItems} from "./MenuItems";
import { Button } from "../Button"
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    state={clicked:false
        
     }
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
   
     
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">NEDUET</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ?'fas fa-times':'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked?'nav-menu active':'nav-menu'}>
                    {/* { MenuItems.map((item,index) => {
                       return(
                        <li key={index}>
                            <Link to={`/${item.title}`} className={item.cName} href={item.url} >
                            {item.title}
                            </Link>
                           
                        </li>
                       )
                    })} */}
                    
                </ul>
                
             <Link to="/Sign_Up"><Button>Sign In</Button> </Link>
            </nav>
        )
    }
}
export default Navbar;
