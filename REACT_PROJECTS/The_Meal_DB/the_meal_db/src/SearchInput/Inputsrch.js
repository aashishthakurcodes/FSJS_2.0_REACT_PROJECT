import React, { useEffect, useState } from "react";

const Input_Search=()=>{
  const[input,setinput]=useState([]);

  
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+)
    .then((res)=>res.json())
    .then((data)=>{setinput(data)})
   
  }


    return(
        <div>
            <input type="text" placeholder="Enter some data" value={input}
             onChange={(e)=>setinput(e.target.value)} />
            <button>{input}</button>
        </div>
    )
}

export default Input_Search;