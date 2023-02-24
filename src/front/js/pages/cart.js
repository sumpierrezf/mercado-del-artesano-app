import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams, Navigate } from "react-router-dom";
import "../../styles/home.css";

import { CartLi } from "../component/cartli";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // _______________________________Cálculo_del_subtotal__________________________________

  let subtotal = 0;
  for (let i = 0; i < store.products_in_cart.length; i++) {
    subtotal +=
      store.products_in_cart[i].productsInfo.price *
      store.products_in_cart[i].amount;
  }
  // _______________________________Cierre_de:Cálculo_del_subtotal__________________________________

  // _______________________________Update_number_of_sales__________________________________

  const updateSales = () => {
    store.products_in_cart.forEach((cartItem) => {
      const { product_id, amount } = cartItem;
      actions.updateProductSales(product_id, amount);
    });
  };
  // _______________________________Cierre_de:Update_number_of_sales__________________________________

  useEffect(() => {
    actions.getUserProductsInCart(localStorage.user_id);
  }, [store.products_in_cart]);

  const pagar = async (e) => {
    e.preventDefault();
    let total = subtotal * 1.22;
    console.log(total);
    await actions.pagoMercadoPago(total, localStorage.user_id);
    let direccion = await store.mercadoPago.init_point;
    // console.log(direccion);
    window.location.replace(direccion);
    // console.log("funciona");
  };

  return (
    <>
      {localStorage.user_id === null ? (
        <Navigate to="/login" />
      ) : (
        <div className="bg-naranja-200 border-marron m-auto rounded row col-sm-11 col-lg-10 p-4 pt-4 my-4">
          <p className="mb-3" style={{ height: "20px" }}>
            {store.products_in_cart.length} productos en el carrito
          </p>

          <div className="col-sm-8 ps-0 dvi">
            <div className="bg-naranja-100 border-marron rounded h-100">
              {/* __________________Lista_de_favoritos________________________ */}
              <ul className=" list-group list-group-flush m-auto my-1 p-0">
                <li className="list-group-item bg-naranja-100 text-marron border-marron-bot">
                  <h4>Carrito de compras</h4>
                </li>
                <hr className="m-0 border-marron opacity-0" />

                {/* __________________MAP________________________ */}
                {store.products_in_cart.map((item, index) => (
                  <li
                    key={index}
                    className="bg-naranja-100 border-marron text-marron container list-group-item d-flex w-100"
                  >
                    <CartLi
                      nombre={item.productsInfo.name}
                      precio={item.productsInfo.price}
                      imagen={item.productsInfo.img1}
                      stock={item.productsInfo.amount}
                    />
                    <div className="col-lg-6 col-sm-4 d-flex justify-content-end">
                      <input
                        type="number"
                        className="form-controlmy-auto me-2 my-auto col-lg-11 col-sm-6"
                        style={{ height: "36px" }}
                        placeholder="Cantidad"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        min={1}
                        max={item.productsInfo.amount}
                        value={item.amount == null ? 0 : item.amount}
                        onChange={(e) => {
                          actions.setAmountInCart(
                            item.user_id,
                            item.product_id,
                            e.target.value
                          );
                        }}
                      />
                      <button
                        className="float-end my-auto rounded bg-naranja-200 text-marron border-marron"
                        style={{
                          height: "35px",
                        }}
                        onClick={() =>
                          actions.borrarProductInCart(
                            localStorage.user_id,
                            item.product_id
                          )
                        }
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </li>
                ))}
                {/* __________________Cierre_de_MAP________________________ */}
              </ul>
              {/* __________________Cierre_de_lista_de_favoritos________________________ */}
            </div>
          </div>
          <div className="bg-naranja-100 border-marron col-sm-4 rounded">
            <h4 className="mt-3 text-center">Total</h4>
            <hr className="my-1 border-marron opacity-75" />
            <br />
            <div className="d-flex">
              <h5 className="w-50">Subtotal:</h5>
              <h5 className="text-end w-50">${subtotal}</h5>
            </div>

            <br />
            <div className="d-flex">
              <h6 className="w-50">Impuestos:</h6>
              <h5 className="text-end w-50">${Math.round(subtotal * 0.22)}</h5>
            </div>
            <hr className="my-3 border-marron opacity-75" />
            <div
              className="d-flex"
              style={{
                marginTop: "160px",
              }}
            >
              <h4 className="w-50">TOTAL:</h4>
              <h4 className="text-end w-50">${Math.round(subtotal * 1.22)}</h4>
            </div>
            <hr className="border-marron opacity-75" />
            <div className="d-flex row">
              <div className="logo col-lg-4 col-sm-12">
                <img
                  className="img-fluid"
                  src="https://www.leccionesdearmonica.com/wp-content/uploads/2018/03/Logo-Mercado-Pago-fondocrema.png"
                  alt="Logo de Mercado Pago"
                />
              </div>
              <div className="container col-lg-8 row mx-auto justify-content-center">
                <button
                  type="button"
                  className="btn btn-sm rounded-1 bg-naranja-200 border-marron m-1"
                  onClick={(e) => {
                    pagar(e);
                    updateSales();
                  }}
                >
                  Pagar
                </button>
                <button
                  type="button"
                  className="btn btn-sm rounded-1 bg-naranja-100 border-marron m-1 mb-3"
                  onClick={() => actions.vaciarCarrito(localStorage.user_id)}
                >
                  Vaciar carrito.
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
