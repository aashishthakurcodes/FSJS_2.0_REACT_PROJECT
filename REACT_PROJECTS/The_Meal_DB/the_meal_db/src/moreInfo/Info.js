import Info_shimmer from "../Shimmer/InfoShimmer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Info = () => {
  
  

  const { mealid } = useParams();
  const [info, setinfo] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => setinfo(data.meals[0]));
  }, [mealid]);

  if (info.length === 0) {
    return <Info_shimmer/>;
  }
  return (
    <div>
      <section>
        <div className="info__main">
          <img className="img_info" src={info.strMealThumb} alt="img" />

          <div className="container">
            <div>
              <h1 style={{fontFamily:"Roboto Slab"}}>Ingredients</h1>
            </div>

            <div className="info_list">
              <div>
                <li>{info.strIngredient1}</li>
                <li>{info.strIngredient2}</li>
                <li>{info.strIngredient3}</li>
                <li>{info.strIngredient4}</li>
                <li>{info.strIngredient5}</li>
                <li>{info.strIngredient6}</li>
                <li>{info.strIngredient7}</li>
                <li>{info.strIngredient8}</li>
                <li>{info.strIngredient9}</li>
                <li>{info.strIngredient10}</li>
                <li>{info.strIngredient11}</li>
                <li>{info.strIngredient12}</li>
                <li>{info.strIngredient13}</li>
                <li>{info.strIngredient14}</li>
                <li>{info.strIngredient15}</li>
              </div>

              <div>
                <li>{info.strMeasure1}</li>
                <li>{info.strMeasure2}</li>
                <li>{info.strMeasure3}</li>
                <li>{info.strMeasure4}</li>
                <li>{info.strMeasure5}</li>
                <li>{info.strMeasure6}</li>
                <li>{info.strMeasure7}</li>
                <li>{info.strMeasure8}</li>
                <li>{info.strMeasure9}</li>
                <li>{info.strMeasure10}</li>
                <li>{info.strMeasure11}</li>
                <li>{info.strMeasure12}</li>
                <li>{info.strMeasure13}</li>
                <li>{info.strMeasure14}</li>
                <li>{info.strMeasure15}</li>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="instruction">
            <h2 style={{fontFamily:"Roboto Slab"}}>Instruction</h2>
            <p style={{fontFamily:"Roboto Slab"}}>{info.strInstructions}</p>
        </div>
      </section>

      <section>
        <div className="tutorial">
        <iframe
          title="YouTube video player"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${info.strYoutube.slice(-11)}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>


        

            
        </div>
      </section>
    </div>
  );
};

export default Info;
{
  /* 

<div>
          <h1 style={{textAlign:"center"}}>How to make {info.strMeal} 😋</h1>

          <div className="info_01">
            <img className="info_img" src={info.strMealThumb} alt="img" />
            <div
              className="data_container"
              style={{
                border: "3px solid black",
                display: "flex",
                padding: "5px",
              }}
            >
                <div>
                    <h1>Ingridients</h1>
                </div>

                <div style={{display:"flex",gap:"20px"}}>
              <div
                style={{
                  listStyle: "none",
                  border: "2px solid green",
                  padding: "5px",
                }}
              >
                <li>{info.strIngredient1}</li>
                <li>{info.strIngredient2}</li>
                <li>{info.strIngredient3}</li>
                <li>{info.strIngredient4}</li>
                <li>{info.strIngredient5}</li>
                <li>{info.strIngredient6}</li>
                <li>{info.strIngredient7}</li>
                <li>{info.strIngredient8}</li>
                <li>{info.strIngredient9}</li>
                <li>{info.strIngredient10}</li>
                <li>{info.strIngredient11}</li>
                <li>{info.strIngredient12}</li>
                <li>{info.strIngredient13}</li>
                <li>{info.strIngredient14}</li>
                <li>{info.strIngredient15}</li>
              </div>

              <div style={{ listStyle: "none" , padding: "5px"}}>
                <li>{info.strMeasure1}</li>
                <li>{info.strMeasure2}</li>
                <li>{info.strMeasure3}</li>
                <li>{info.strMeasure4}</li>
                <li>{info.strMeasure5}</li>
                <li>{info.strMeasure6}</li>
                <li>{info.strMeasure7}</li>
                <li>{info.strMeasure8}</li>
                <li>{info.strMeasure9}</li>
                <li>{info.strMeasure10}</li>
                <li>{info.strMeasure11}</li>
                <li>{info.strMeasure12}</li>
                <li>{info.strMeasure13}</li>
                <li>{info.strMeasure14}</li>
                <li>{info.strMeasure15}</li>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section> */
}
