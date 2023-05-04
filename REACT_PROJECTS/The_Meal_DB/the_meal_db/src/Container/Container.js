import React, { useEffect, useState } from "react";
import Show_Shimmer from "../Shimmer/Shimmer.js";
import { Link } from "react-router-dom"


const Container = () => {
  const [meal, setmeal] = useState([]);
  // const[shimer,setsim]=useState(true)
  const [input, setInput] = useState("");

  const handleclick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + input)
      .then((res) => res.json())
      .then((data) => {
        setmeal(data.meals);
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

      })
  }, []);


  // Search btn


  if (meal.length === 0) {
    return <Show_Shimmer />
  }

  return (
    <div>
      <div className="inputsrch">
        <input
          type="text"
          placeholder="Enter some data"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleclick}>search</button>
      </div>

      <div>
        <div className="data_container">
          
            {meal.map((meal) => (
              <div className="box_meal" >
                 <Link to={"/info/" + meal.idMeal}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h2>{meal.strMeal}</h2>
                <h3>{meal.strArea}</h3>
                </Link>
              </div>

            ))}
        </div>
      </div>
    </div>
  )
}

export default Container;