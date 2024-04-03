import React from "react";
import { Link } from "react-router-dom";

const CardPeople = ({ person }) => {
  console.log(person);
  return (
    <div className="card">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
        alt={person.name}
      />
      <h2>{person.name}</h2>
      <p>Gender: {person.gender}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <Link className="btn btn-primary" to={`/single/${person.uid}`}>
        Learn more!
      </Link>
    </div>
  );
};

export default CardPeople;
