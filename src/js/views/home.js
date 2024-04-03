import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      {store.people &&
        store.people.map((el) => (
          <div className="card">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
            />
            <h2>{el.name}</h2>
            <Link className="btn btn-primary" to={`/single/${el.uid}`}>
              Learn more!
            </Link>
          </div>
        ))}
    </div>
  );
};
