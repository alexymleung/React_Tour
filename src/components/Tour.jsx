const Tour = ({ image, date, title, info, location, duration, cost }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
        <p>{date}</p>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{info}</p>
        <ul>
          <li>
            {" "}
            <i className="fa-solid fa-map"></i>
            {location}
          </li>
          <li>{duration}</li>
          <li>from ${cost}</li>
        </ul>
      </div>
    </div>
  );
};

export default Tour;
