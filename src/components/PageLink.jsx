import React from "react";

function PageLink({ groupName, itemName }) {
  return (
    <ul className={groupName}>
      <li className={itemName}>
        <a href="#home">Home</a>
      </li>
      <li className={itemName}>
        <a href="#about">About</a>
      </li>
      <li className={itemName}>
        <a href="#services">Services</a>
      </li>
      <li className={itemName}>
        <a href="#tours">Tours</a>
      </li>
    </ul>
  );
}

export default PageLink;
