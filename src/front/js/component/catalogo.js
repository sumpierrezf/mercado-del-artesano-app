import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Catalogo = ({
  id,
  name,
  category,
  price,
  amount,
  // description,
  // condition,
  img1,
  // img2,
  // img3,
  // img4,
  user_id,
  product_id,
}) => {
  const { actions, store } = useContext(Context);

  return (
    <>
      <div
        className="card d-flex mx-3 my-3"
        style={{
          width: "17rem",
        }}
      >
        <img
          className="img-fluid card-img-top mt-1 h-50"
          src={img1}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Nombre: {name} </h5>
          <p className="card-text">Categoría: {category}</p>
          <p className="card-text">Precio: $ {price} </p>
          <p className="card-text">Cantidad: {amount} </p>
          <div className="justify-content-between">
            <Link
              to={"/detalleProducto/" + id}
              className="btn bg-naranja-200 text-marron"
            >
              + Info
            </Link>
            <button
              className="btn text-warning"
              onClick={() =>
                store.user_id == null
                  ? alert("Debes iniciar sesión")
                  : actions.agregarAlCarrito(user_id, product_id, 1)
              }
            >
              <i className="fa fa-cart-arrow-down"></i>
            </button>
            <button
              className="btn text-danger"
              onClick={() =>
                store.user_id == null
                  ? alert("Debes iniciar sesión")
                  : actions.addToFavorites(user_id, product_id)
              }
            >
              <i className="fa fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
