import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Products = ({
  id,
  name,
  category,
  price,
  amount,
  description,
  condition,
  img,
}) => {
  const { actions, store } = useContext(Context);

  return (
    <>
      <div
        className="card h-100"
        style={{
          width: "18rem",
        }}
      >
        <img
          className="img-fluid card-img-top"
          src={store.detalleProducto.img}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Nombre: {name} </h5>
          <p className="card-text">Categoría: {category}</p>
          <p className="card-text">Precio: $ {price} </p>
          <p className="card-text">Cantidad: {amount} </p>
          <div className="hstack gap-5">
            <Link to={"/detalleProducto/" + id} className="btn btn-primary">
              + Info:{id}
            </Link>
            <button
              className="btn text-warning"
              onClick={() => actions.agregarAlCarrito(name)}
            >
              <i className="fa fa-cart-arrow-down"></i>
            </button>
            <button
              className="btn text-danger"
              onClick={() => actions.agregarFavorito(name)}
            >
              <i className="fa fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
