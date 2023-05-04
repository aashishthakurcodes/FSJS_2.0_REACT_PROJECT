import Show_Shimmer from "../Shimmer/Shimmer";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const Info=()=>{
   const{mealid}=useParams();
   const[info,setinfo]=useState([]);

   useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
    .then((res)=>res.json())
    .then((data)=>setinfo(data.meals[0]))
   },[mealid])

   if(info.length===0){
    return <Show_Shimmer/>

   }
    return(
        <div>
           <h1>Id is{mealid}</h1>
           <h1>Id is{info.strMeal}</h1>
           {/* <h1>Id is{info.strInstructions}</h1> */}
           <img src={info.strMealThumb} alt="img" />
        </div> 
    )
}

export default Info;