import React from "react";

export const CartLi = (props) => {
  return (
    <div className="d-flex w-50">
      <img src={props.imagen} alt="" style={{ height: 80, width: "auto" }} />
      <div className="mx-3">
        <h5>{props.nombre}</h5>
        <p>${props.precio}</p>
      </div>
    </div>
  );
};
