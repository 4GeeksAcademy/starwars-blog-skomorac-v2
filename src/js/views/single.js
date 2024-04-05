import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  console.log(store.peopleProperties);
  console.log(store.characterDetails);

  useEffect(() => {
    actions.getPeopleProperties(theid);
  }, []);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row">
          <div className="col-md-5">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
              className="card-img-top"
              alt={theid}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7 p-4 d-flex flex-column justify-content-between">
            <div>
              <h2>{store.peopleProperties?.name}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                gravida ullamcorper nisi, id dictum ligula vestibulum vel.
                Mauris commodo faucibus nibh, non malesuada enim tempor non.
              </p>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <div className="card-body">
                    <h5 className="card-title">Gender</h5>
                    <p className="card-text">
                      {store.peopleProperties?.gender}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <div className="card-body">
                    <h5 className="card-title">Height</h5>
                    <p className="card-text">
                      {store.peopleProperties?.height}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <div className="card-body">
                    <h5 className="card-title">Mass</h5>
                    <p className="card-text">{store.peopleProperties?.mass}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <div className="card-body">
                    <h5 className="card-title">Hair color</h5>
                    <p className="card-text">
                      {store.peopleProperties?.hair_color}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <div className="card-body">
                    <h5 className="card-title">Eye color</h5>
                    <p className="card-text">
                      {store.peopleProperties?.eye_color}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mb-3">
                <div className="card border-dark">
                  <div className="card-body">
                    <h5 className="card-title">Birth year</h5>
                    <p className="card-text">
                      {store.peopleProperties?.birth_year}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
