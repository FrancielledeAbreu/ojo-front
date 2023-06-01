import React from "react";

const Card = ({ image, name, title, date }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{title}</h3>
      <p>{name}</p>
      <p>{date}</p>
    </div>
  );
};

export default Card;
