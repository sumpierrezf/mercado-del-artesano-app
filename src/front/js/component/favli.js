import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const FavLi = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex">
      <img src={props.imagen} alt="" style={{ height: 80, width: "auto" }} />
      <div className="mx-3 w-100">
        <h5>{props.nombre}</h5>
        <p>${props.precio}</p>
      </div>
    </div>
  );
};
