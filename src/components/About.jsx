import React from "react";
import { getImageUrl } from "../utils/images";

const Hero = () => {
  return (
    <section className="about" id="about">
      <h2>
        about <span className="text-secondary">us</span>
      </h2>
      <div className="about-content">
        <div className="about-img">
          <img src={getImageUrl("tour11.jpg")} alt="" />
        </div>
        <div className="text">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            deleniti.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            deleniti.
          </p>
          <a className="btn-about" href="#">
            read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
