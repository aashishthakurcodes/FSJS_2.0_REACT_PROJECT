import React from "react";

const Footer = () => {
  return (
    <div>
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

export default Footer;
