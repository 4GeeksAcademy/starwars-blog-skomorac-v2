import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getPeopleProperties(theid);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <p>Gender: {store.peopleProperties?.gender}</p>
        <p>Height: {store.peopleProperties?.height}</p>
        <p>Mass: {store.peopleProperties?.mass}</p>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
