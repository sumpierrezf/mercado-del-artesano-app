import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swal from "sweetalert";

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
        className="card d-flex mx-3 my-3 shadow"
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
          <h5 className="card-title">{name} </h5>
          <p className="card-text">Categoría: {category}</p>
          <p className="card-text text-verde">Precio: $ {price} </p>
          <p className="card-text">Stock: {amount} </p>
          <div className="justify-content-between">
            <Link
              to={"/detalleProducto/" + id}
              className="btn bg-naranja-200 text-marron shadow"
            >
              + Info
            </Link>
            <button
              className="btn text-warning"
              onClick={() =>
                localStorage.user_id == null
                  ? swal(
                      "Atención!",
                      "Debes iniciar sesión para agregar productos al carrito",
                      "warning"
                    )
                  : actions.agregarAlCarrito(user_id, product_id, 1)
              }
            >
              <i className="fa fa-cart-arrow-down"></i>
            </button>
            <button
              className="btn text-danger"
              onClick={() =>
                localStorage.user_id == null
                  ? swal(
                      "Atención!",
                      "Debes iniciar sesión para guardar tus productos favoritos",
                      "warning"
                    )
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
