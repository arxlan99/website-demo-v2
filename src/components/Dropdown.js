import React from "react";
import "./Dropdown.css";

const Dropdown = ({ title, contentArray }) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">{title}</button>
      <div className="dropdown__content">
        {contentArray.map((content, index) => (
          <a href="!#" key={index}>
            {content}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
