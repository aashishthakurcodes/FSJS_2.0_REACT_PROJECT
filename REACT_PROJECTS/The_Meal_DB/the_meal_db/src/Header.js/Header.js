import React, { useState } from 'react';
import gif from "../Images/595069106677405.5f95b0402b8d3.gif";
import { Link } from 'react-router-dom';


const Header = () => {
  

    const[data,updated]=useState("Login");

    const handle=()=>{
        if(data==="Login"){
         updated("Logout")
        }
        else if(data==="Logout"){
            updated("Login")
        }
    }

  return (
    <div className={"Header"}>
      <div className='navbar'>
        <img style={{ width: "100px", height: "70px" }} src={gif} alt='logo' />
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <button className='login' onClick={handle}>
      {data}
        </button>
      </div>
    </div>
  );
};

export default Header;
