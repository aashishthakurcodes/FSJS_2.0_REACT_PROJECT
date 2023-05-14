import React, { useEffect, useState } from "react";
import Show_Shimmer from "../Shimmer/Shimmer.js";
import { Link } from "react-router-dom";
import Error from "../About_pg/Error";

const Container = () => {
  const [meal, setMeal] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleClick = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + input)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          setMeal(data.meals);
          setError(false);
        } else {
          setMeal([]);
          setError(true);
        }
      })
      .catch((error) => {
        // console.error(error);
        alert(error);
      });
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
        // console.error(error);
      });
  }, []);

  if (loading) {
    return <Show_Shimmer />;
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
        <button className="srcbtn" onClick={handleClick}>
          Search
        </button>
      </div>

      {error && <Error />}

      <div>
        <div className="data_container">
          {meal.map((meals) => (
            <div className="box_meal" key={meals.idMeal}>
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
  );
};

export default Container;
