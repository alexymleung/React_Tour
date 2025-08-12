import img from "../assets/tour11.jpg";
import Title from "./Title";

const Hero = () => {
  return (
    <section className="about" id="about">
      <Title title="about" subtitle="us" />

      <div className="about-content">
        <div className="about-img">
          <img src={img} alt="" />
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
