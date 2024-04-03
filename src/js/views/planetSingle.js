import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetSingle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getPlanetProperties(theid);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <p>Population: {store.planetProperties?.population}</p>
        <p>Terrain: {store.planetProperties?.terrain}</p>
        <p>Gravity: {store.planetProperties?.gravity}</p>
      </div>
    </div>
  );
};

PlanetSingle.propTypes = {
  match: PropTypes.object,
};
