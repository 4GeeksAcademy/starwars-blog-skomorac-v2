import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CardPeople = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    if (theid) {
      actions.getPeopleProperties(theid);
    }
  }, [theid, actions]); // Added theid and actions to dependency array

  return (
    <div className="text-center mt-5">
      {store.people &&
        store.people.map((person) => (
          <div className="card" key={person.uid}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
              alt={person.name}
            />
            <h2>{person.name}</h2>
            <p>Gender: {store.peopleProperties?.name}</p>{" "}
            {/* Access gender directly */}
            <Link className="btn btn-primary" to={`/single/${person.uid}`}>
              Learn more!
            </Link>
          </div>
        ))}
    </div>
  );
};
