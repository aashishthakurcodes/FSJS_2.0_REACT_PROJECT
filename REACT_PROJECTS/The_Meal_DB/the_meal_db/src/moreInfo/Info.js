// import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const Info=()=>{
   const{id}=useParams();
   const[info,setinfo]=useState({});

   useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res)=>res.json())
    .then((data)=>setinfo(data.meals[0]))
   },[id])

    return(
        <div>
           <h1>Id is{id}</h1>
           <h1>Id is{info.strMeal}</h1>
           {/* <h1>Id is{info.strInstructions}</h1> */}
           <img src={info.strMealThumb} alt="img" />
        </div> 
    )
}

export default Info;