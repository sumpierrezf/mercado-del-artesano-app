import React from "react";

export const CartLi = (props) => {
  return (
    <div className="d-flex col-lg-6 col-sm-8">
      <img src={props.imagen} alt="" className="col-lg-4 col-sm-5" />
      <div className="mx-3 col-lg-8 col-sm-7">
        <h6>{props.nombre}</h6>
        <p>${props.precio}</p>
      </div>
    </div>
  );
};
