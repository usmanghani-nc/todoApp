import React from 'react'

import {Link} from 'react-router-dom'

import './header.style.scss'

const Button = () => (
 <div className="header">

    <h3 className="title">Todo App</h3>

     <nav>
       <ul className="">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todo">Todos</Link></li>
      </ul>
    </nav> 
    
  </div>    
);

export default Button; 