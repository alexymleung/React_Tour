export const Service = ({ icon, title, info }) => {
  return (
    <div className="service-title">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p>{info}</p>
    </div>
  );
};
