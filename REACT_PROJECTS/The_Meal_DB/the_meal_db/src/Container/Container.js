import React, { useEffect, useState } from "react";
import Show_Shimmer from "../Shimmer/Shimmer.js";
import { Link } from "react-router-dom"


const Container = () => {
  const [meal, setmeal] = useState([]);
  const [search, setsearch] = useState([]);
  const [input, setInput] = useState("");

 

  const handleclick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + input)
      .then((res) => res.json())
      .then((data) => {
        setmeal(data.meals)
        setmeal(data.meals)
      
      })
      .catch((error) => {
        // console.error(error);
        alert(error)
      });

  }

 

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setmeal(data.meals);
       if(search.length===0){
       return<p>Oops ,... No result</p>
       }
      })
  }, []);

 


  // Search btn
if(meal.length===0){
  return  <Show_Shimmer/>;
}




  
  return  (
    <div>
      <div className="inputsrch">
        <input
          type="text"
          placeholder="Enter some data"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="srcbtn" onClick={handleclick}>Search</button>
      </div>
  

      
  
      <div>
        <div className="data_container">
          
            {meal.map((meals) => (
              <div className="box_meal" >
                 <Link to={"/info/" + meals.idMeal}>
                <img src={meals.strMealThumb} alt={meals.strMeal} />
                <h2>{meals.strMeal}</h2>
                <h3>{meals.strArea}</h3>
                </Link>
              </div>

            ))}
        </div>
      </div>
    </div>
  )
}

export default Container;