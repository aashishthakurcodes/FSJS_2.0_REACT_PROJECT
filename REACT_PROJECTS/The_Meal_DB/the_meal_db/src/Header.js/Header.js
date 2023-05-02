import React from 'react'
import {Link} from 'react-router-dom'


const Header=()=>{
    return(
        <div>
         <div className='navbar'>
            <h2>LoGo</h2>
            <ul>
                <Link to={"/"}>
              <li>Home</li> </Link>
              <Link to={"/about"}>
              <li>About</li> </Link>
              <Link to={"/contact"}>
              <li>Contact</li> </Link>
            </ul>
            <button>Login</button>
         </div>
        </div>
    )
}

export default Header;