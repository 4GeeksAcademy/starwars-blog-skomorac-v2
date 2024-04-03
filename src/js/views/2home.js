// Home.js
import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
  }, [actions]);

  return (
    <div className="text-center mt-5">
      {store.people &&
        store.people.map((person) => (
          <CardPeople key={person.uid} person={person} />
        ))}
    </div>
  );
};
