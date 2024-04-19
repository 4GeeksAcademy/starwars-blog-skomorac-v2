import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const CardPeople = () => {
  const { store, actions } = useContext(Context);
  const cardContainerRef = useRef(null);

  const addToFavorites = (id, name) => {
    // Check if the favorite already exists
    const isFavoriteExist = store.favoritesPeople.find(
      (favorite) => favorite.name === name
    );

    if (!isFavoriteExist) {
      // Add to favorites if it doesn't exist
      actions.addToFavoritesPeople(id, name);
    }
  };

  return (
    <div className="container-fluid mb-5">
      <div className="row">
        <div className="col-12">
          <div className="card-slider">
            <h2 className="mainTitle">Characters</h2>
            <div className="card-container" ref={cardContainerRef}>
              {store.people &&
                store.people.map((el) => (
                  <div className="card" key={el.uid}>
                    <img
                      src={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}
                      className="card-img-top"
                      alt={el.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{el.name}</h5>
                      {store.characterDetails[el.uid] && (
                        <div>
                          <p className="card-text">
                            Gender: {store.characterDetails[el.uid].gender}
                          </p>
                          <p className="card-text">
                            Height: {store.characterDetails[el.uid].height}
                          </p>
                          <p className="card-text">
                            Mass: {store.characterDetails[el.uid].mass}
                          </p>
                        </div>
                      )}
                      <Link
                        to={`/single/${el.uid}`}
                        className="btn btn-primary learn-more-btn"
                      >
                        Learn more!
                      </Link>
                      <button
                        className="btn btn-warning ml-2 favorite-btn"
                        onClick={() => addToFavorites(el.uid, el.name)}
                        disabled={store.favoritesPeople.some(
                          (favorite) => favorite.name === el.name
                        )}
                      >
                        <i className="fa fa-star mr-2"></i>
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="slider-controls"></div>
        </div>
      </div>
    </div>
  );
};
