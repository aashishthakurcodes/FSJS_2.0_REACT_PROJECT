import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer.js";


const Container=()=>{
    const[meal,setmeal]=useState([]);
    const[shimer,setsim]=useState(true)

    useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res)=>res.json())
      .then((data)=>{setmeal(data.meals)
        setsim(false)})
      ;
    },[])

    
    return shimer ? (
        <Shimmer/>
      ) :(
        <div>
            <div>
            <div className="data_container">
            {meal.map((meal) => (
        <div className="box_meal" key={meal.idMeal}>
          
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
          <h3>{meal.strArea}</h3>
        </div>
      ))}
    </div>
            </div>
        </div>
    )
}

export default Container;