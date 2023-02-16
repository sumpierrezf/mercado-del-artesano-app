import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormPago = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let subtotal = 0;

  for (let i = 0; i < store.products_in_cart.length; i++) {
    subtotal +=
      store.products_in_cart[i].productsInfo.price *
      store.products_in_cart[i].amount;
  }

  useEffect(() => {
    actions.getUserProductsInCart(store.user_id);
  }, []);

  console.log(store.products_in_cart);

  return (
    <>
      {store.auth === false ? (
        <Navigate to="/login" />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-8 mt-5">
              <h5 className="text-center">Método de pago.</h5>
              <hr />
              <div className="d-flex container justify-content-between bg-naranja-200 border-marron p-3 mb-5">
                <div className="form-check col-sm-7">
                  <input
                    className="form-check-input border-marron bg-naranja-100"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Mercado Pago.
                  </label>
                  <p>
                    <small>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi sunt a voluptate autem dolore, quibusdam
                      officiis, libero rem modi, expedita possimus. Autem,
                      molestiae. Consequatur doloremque laboriosam nobis
                      incidunt eveniet enim!
                    </small>
                  </p>
                </div>
                <div className="logo col-sm-3">
                  <img
                    className="img-fluid"
                    src="https://www.leccionesdearmonica.com/wp-content/uploads/2018/03/Logo-Mercado-Pago-fondocrema.png"
                    alt="Logo de Mercado Pago"
                  />
                </div>
              </div>
              <hr />
              <div className="m-3">
                <button
                  type="button"
                  className="btn btn-sm rounded-1 bg-naranja-200 border-marron m-3 px-3"
                >
                  Pagar
                </button>
                <button
                  type="button"
                  className="btn btn-sm rounded-1 bg-naranja-100 border-marron px-3"
                >
                  Cancelar
                </button>
              </div>
            </div>
            {/* COLUMNA DERECHA */}
            <div className="col-sm-6 col-lg-4 mt-5">
              <h5 className="text-center">Total.</h5>
              <hr />
              <div className="row col-sm-12">
                <div
                  className="container"
                  style={{ overflowY: "scroll", height: "243px" }}
                >
                  {/* MAP */}
                  <div className="container col-sm-12">
                    {store.products_in_cart.map((item, index) => (
                      <div
                        className="d-flex container col-sm-12 justify-content-between mb-2"
                        key={index}
                      >
                        <img
                          className="img-fluid rounded-1 border-marron me-3 w-50"
                          src={item.productsInfo.img1}
                        />
                        <div className="container">
                          <p>
                            <small>{item.productsInfo.name}</small>
                          </p>
                          <p>
                            <small>Cantidad: {item.amount}</small>
                          </p>
                          <p>
                            <small>$ {item.productsInfo.price}</small>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <hr />
                {/* SUMA de las compras */}
                <div className="container col-sm-12 p-5">
                  <div className="d-flex container justify-content-between">
                    <p>Subtotal</p>
                    <p>$ {subtotal}</p>
                  </div>
                  <div className="d-flex container justify-content-between">
                    <p>Impuestos</p>
                    <p>$ {subtotal * 0.22}</p>
                  </div>
                  <hr />
                  <div className="d-flex container justify-content-between">
                    <p>TOTAL</p>
                    <p>$ {subtotal * 1.22}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
FormPago.propTypes = {
  match: PropTypes.object,
};
