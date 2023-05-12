import React from 'react';
import gif from "../Images/595069106677405.5f95b0402b8d3.gif"
import {Link} from 'react-router-dom'


const Header=()=>{
    return(
        <div className='Header'>
         <div className='navbar'>
            <img style={{width:"100px",height:"70px"}} src={gif} alt='logo'/>
            <ul>
                <Link to={"/"}>
              <li>Home</li> </Link>
              <Link to={"/about"}>
              <li>About</li> </Link>
              <Link to={"/contact"}>
              <li>Contact</li> </Link>
            </ul>
            <button className='login'>Login</button>
         </div>
        </div>
    )
}

export default Header;