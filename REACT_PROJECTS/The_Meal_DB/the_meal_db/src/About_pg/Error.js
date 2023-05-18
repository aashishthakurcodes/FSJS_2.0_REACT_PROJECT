import React from 'react';
import { Link } from 'react-router-dom';
import  noresult from "../Images/no-results.gif"


const Error =()=>{
    return(
        <div className='error_div'>
      <img style={{width:"600px",height:"400px"}} src={noresult} alt='noresult'/>

     <button>
       <Link to={"/"}>Home</Link>
     </button>
    
        </div>

        
    )
}


export default Error;