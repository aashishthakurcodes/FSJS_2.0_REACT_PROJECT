import React from "react";

const About = () => {
  return (
    <div className="about_01">
      <div className="about_02">
        <div className="jkl">
          <h1>Welcome to TheMealDB</h1>
        </div>

        <div className="jkl">
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

export default About;

{
  /* <div className='aboutus'>
<div className='aboutcont'>
  <h1>
  Welcome to TheMealDB

  </h1>


<h2>About</h2>
  <h3>

TheMealDB was built in 2016 to provide a free data source api for recipes online
in the hope that developers would build applications and cool projects ontop of it.
TheMealDB originated on the Kodi forums as a way to browse recpies on your TV..</h3>

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
</div> */
}
