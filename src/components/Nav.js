import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../img/index.png'
const Nav = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <Link to="/" className="navbar-brand">
           <img src={Logo} alt="Logo"></img>
           </Link>
           <div className="collapse navbar-collapse show ml-sm-5">
               <ul className="navbar-nav mr-aut">
                   <li className="nav-item">
                       <Link className="nav-link active" to="/">Home</Link>
                   </li>
                  
                   <li className="nav-item">
                       <Link className="nav-link" to="recipes">Recipes</Link>
                   </li>
               </ul>
           </div>
       </nav>
    );
};

export default Nav;