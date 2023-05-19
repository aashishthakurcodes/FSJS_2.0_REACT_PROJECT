import React from 'react';

import  noresult from "../Images/no-results.gif";



const Error =()=>{
 const refresh=()=>{
  window.location.reload();
 }

  
    return(
        <div className='error_div'>
      <img style={{width:"600px",height:"400px"}} src={noresult} alt='noresult'/>

     
        <button className='btn2' onClick={refresh}>Back</button>
      
    
        </div>

        
    )
}


export default Error;