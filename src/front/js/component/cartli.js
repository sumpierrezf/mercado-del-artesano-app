import React from "react";

export const CartLi = (props) => {
  return (
    <div className="d-flex col-lg-6 col-sm-8">
      <img src={props.imagen} alt="" className="w-50 shadow" height={"auto"} />
      <div className="mx-3 col-lg-8 col-sm-7">
        <h6 className="text-shadow">{props.nombre}</h6>
        <p>${props.precio}</p>
        <p>Stock: {props.stock}</p>
      </div>
    </div>
  );
};
