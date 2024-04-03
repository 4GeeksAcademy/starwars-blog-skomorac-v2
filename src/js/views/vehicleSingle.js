import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleSingle = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    actions.getVehicleProperties(theid);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <p>Model: {store.vehicleProperties?.model}</p>
        <p>Vehicle class: {store.vehicleProperties?.vehicle_class}</p>
        <p>Crew members: {store.vehicleProperties?.crew}</p>
      </div>
    </div>
  );
};

VehicleSingle.propTypes = {
  match: PropTypes.object,
};
