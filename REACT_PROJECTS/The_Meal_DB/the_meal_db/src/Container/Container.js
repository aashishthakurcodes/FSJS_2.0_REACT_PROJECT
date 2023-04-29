import React, { useEffect, useState } from "react";


const Container=({strMeal,strArea})=>{
    const[meal,setmeal]=useState([])

    useEffect(()=>{
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res)=>res.json())
      .then((data)=>{setmeal(data.meals)})
    },[])

    
    return(
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