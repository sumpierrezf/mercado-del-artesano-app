import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FavLi = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <li
      className="list-group-item d-flex"
      style={{ background: "#FDEEDC", color: "#7b4812" }}
    >
      {/* <img src={props.imagen} alt="" /> */}
      <img
        src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg"
        alt=""
        style={{ height: 80, width: "auto" }}
      />
      <div className="mx-3 w-100">
        <h5>Nombre del producto</h5>
        <p>$000000</p>
      </div>
      <button
        className="float-end rounded"
        style={{
          background: "#FFD8A9",
          color: "#7b4812",
          border: "1px solid #7b4812",
          height: "35px",
          width: "230px",
          marginTop: "35px",
        }}
      >
        Eliminar favorito
      </button>
    </li>
  );
};
