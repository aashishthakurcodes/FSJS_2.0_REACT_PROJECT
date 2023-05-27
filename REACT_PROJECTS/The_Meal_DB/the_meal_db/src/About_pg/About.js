import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about_01">
      <div className="about_02">
        <div className="about_data">
          <h1>Welcome to<span  style={{color:"#f38f05"}}>TheMealDB </span> </h1>
        </div>

        <div className="about_data">
          <h2>About</h2>
          <h3>
            TheMealDB was built in 2016 to provide a free data source api for
            recipes online in the hope that developers would build applications
            and cool projects ontop of it. TheMealDB originated on the Kodi
            forums as a way to browse recpies on your TV..
          </h3>
        </div>
      </div>
      <footer>
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
          <div>
            © 2023 Copyright:
            <a className="text-white" href="https://themealdb.com/">
              themealdb.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

