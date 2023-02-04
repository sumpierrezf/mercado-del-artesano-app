import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Products = ({
  id,
  nombre,
  categoria,
  precio,
  stock,
  //descripcion,
  //condicion,
}) => {
  const { actions } = useContext(Context);

  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
        }}
      >
        <img
          src={"https://m.media-amazon.com/images/I/31PrcIMrQ2L._AC_SY350_.jpg"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {nombre} </h5>
          <p className="card-text"> {categoria} </p>
          <p className="card-text"> {precio} </p>
          <p className="card-text"> {stock} </p>
          <div className="hstack gap-5">
            <Link to={"..." + id} className="btn btn-primary">
              + Info:{id}
            </Link>
            <button
              className="btn text-warning"
              onClick={() => actions.agregarAlCarrito(nombre)}
            >
              <i className="fa fa-cart-arrow-down"></i>
            </button>
            <button
              className="btn text-danger"
              onClick={() => actions.agregarFavorito(nombre)}
            >
              <i className="fa fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
