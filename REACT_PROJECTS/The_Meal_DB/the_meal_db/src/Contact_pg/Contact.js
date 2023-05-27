import React from "react";
import img1 from "../Images/logo-tadb.png";
import img2 from "../Images/logo-tcdb.png";
import img3 from "../Images/logo-tsdb.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div  className="container_contact" >
      <div className="contactus">
        <h1>Contact Us..</h1>

        <h2>Email: thedatadb@gmail.com</h2>
        <h3 style={{padding:"15px 0px",fontFamily:"Roboto Slab"}}>
          TheMealDB was built in 2016 to provide a free data source api for
          recipes online in the hope that developers would build applications
          and cool projects ontop of it. TheMealDB originated on the Kodi forums
          as a way to browse recpies on your TV..
        </h3>
        <div className="othersites">
          <h3>Other Related Sites</h3>
          <Link to={"https://www.theaudiodb.com/"}>
            <img src={img1} alt="other" />
          </Link>

          <Link to={"https://www.thecocktaildb.com/"}>
            <img src={img2} alt="other" />
          </Link>
          <Link to={"https://www.thesportsdb.com/"}>
            <img src={img3} alt="other" />
          </Link>
        </div>
      </div>
      </div>

      <footer>
        <div>
          <button className="btn">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button className="btn">
            <i class="fab fa-youtube"></i>
          </button>
          <button className="btn">
            <i class="fab fa-instagram"></i>
          </button>
          <button className="btn">
            <i class="fab fa-twitter"></i>
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

export default Contact;
