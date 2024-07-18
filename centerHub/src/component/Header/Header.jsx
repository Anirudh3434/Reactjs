import React from "react";
import { Link,NavLink } from "react-router-dom";


export default function Header() {
    return (
       <>
       <nav>
        <div className="logo">
            <span>Portfolio.</span>
        </div>
        <div className="links">
            <NavLink 
             activeClassName='active'
            to='Home'
            className='link'>
                Home
            </NavLink>
            <NavLink 
             activeClassName='active'
            to='About'
            className='link'>
                About
            </NavLink>
            <NavLink 
             activeClassName='active'
            to='Contact'
            className='link'>
                Contact Us
            </NavLink>
            <NavLink 
             activeClassName='active'
            to='Github'
            className='link'>
                Github
            </NavLink>
        </div>
        <div className="button">
            <button className="login">Login</button>
            <button className="start">Get Started</button>
        </div>
       </nav>
       </>
    );
}

