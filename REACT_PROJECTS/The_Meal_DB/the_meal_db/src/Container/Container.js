import React, { useEffect, useState } from "react";
import Show_Shimmer from "../Shimmer/Shimmer.js";
import { Link } from "react-router-dom";
import Error from "../About_pg/Error";
import Footer from "../Header.js/Footer.js"

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
          placeholder="Search for your favourite dish..."
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
                <h2 >{meals.strMeal}</h2>
                <h3>{meals.strArea}</h3>
              </Link>
            </div>
          ))}
        </div>
        <div className="fotter">

        <div>
        <button className="btn">
            <Link to={"https://www.facebook.com/codek.tv/posts/reactjs-meals-app-react-hooks-react-router-contextapi-themealdb-apireact-reactjs/5493431184057501/"}>
            <i class="fab fa-facebook-f"></i></Link>
          </button>
          <button className="btn">
            <Link to={"https://www.youtube.com/watch?v=EGx1ywZLGCA"}>
            <i class="fab fa-youtube"></i></Link>
          </button>
          <button className="btn">
            <Link to={"https://www.instagram.com/themeals_ib/?hl=en"}>
            <i class="fab fa-instagram"></i>
            </Link>
          </button>
          <button className="btn">
            <Link to={"https://twitter.com/Insharamin/status/1431600899214872586"}>
            <i class="fab fa-twitter"></i>
            </Link>
          </button>
          </div>

          <div>
            © 2023 Copyright:
            <a className="text-white" href="https://themealdb.com/">
              themealdb.com
            </a>
          </div>

        </div>
      </div>
    
    </div>
  );
};

export default Container;
