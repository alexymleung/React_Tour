import React from "react";

const Title = ({ title, subtitle }) => {
  return (
    <h2>
      {title} <span className="text-secondary">{subtitle}</span>
    </h2>
  );
};

export default Title;
