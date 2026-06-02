import { Link } from "react-router-dom";
import React from "react";

function Header() {
 

  return (
    <>
   <div className="navbar">
    <ul>
        <li className="nav">
            <span> 🎓</span>Student Directory
        </li>
    </ul>
    <ul className="pages">
   <li><Link to="/">Home</Link></li>
   <li><Link to="/about">About</Link></li>
    </ul>

   </div>
    </>
  );
}

export default Header;