
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


function Navbar(){


    return(
        <nav>
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
            Logo
          </Link>
          

          <ul id="nav-mobile" className="right">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>

    )
}
export default Navbar;