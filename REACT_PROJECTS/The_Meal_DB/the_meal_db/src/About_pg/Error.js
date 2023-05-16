import React from 'react';
import { Link } from 'react-router-dom';
// import Container from '../Container/Container';


const Error =()=>{
    return(
        <div>
     <h1>OOPS...No result found</h1>

     <button>
       <Link to={"/"}>Home</Link>
     </button>
    
        </div>

        
    )
}


export default Error;