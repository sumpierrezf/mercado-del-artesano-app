import React from "react";

export const FavLi = (props) => {
  return (
    <div className="d-flex col-11">
      <img src={props.imagen} alt="" style={{ height: 80, width: "auto" }} />
      <div className="mx-3">
        <h5>{props.nombre}</h5>
        <p>${props.precio}</p>
      </div>
    </div>
  );
};
