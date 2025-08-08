import React from "react";
import { getImageUrl } from "../utils/images";

const Tours = () => {
  return (
    <article className="tours" id="tours">
      <h2>
        featured <span className="text-secondary">tours</span>
      </h2>
      <div className="cards">
        {/* <!-- card X 4 --> */}
        <div className="card">
          <div className="card-img">
            <img src={getImageUrl("tour1.jpg")} alt="" />
            <p>23rd, August, 2025</p>
          </div>
          <div className="card-content">
            <h3>adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>
                {" "}
                <i className="fa-solid fa-map"></i>China
              </li>
              <li>6 days</li>
              <li>from $2100</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={getImageUrl("tour3.jpg")} alt="" />
            <p>23rd, August, 2025</p>
          </div>
          <div className="card-content">
            <h3>adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>
                {" "}
                <i className="fa-solid fa-map"></i>China
              </li>
              <li>6 days</li>
              <li>from $2100</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src={getImageUrl("tour5.jpg")} alt="" />
            <p>23rd, August, 2025</p>
          </div>
          <div className="card-content">
            <h3>adventure</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <ul>
              <li>
                {" "}
                <i className="fa-solid fa-map"></i>China
              </li>
              <li>6 days</li>
              <li>from $2100</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Tours;
