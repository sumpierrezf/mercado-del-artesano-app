import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";

import { CartLi } from "../component/cartli";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let subtotal = 0;

  for (let i = 0; i < store.products_in_cart.length; i++) {
    subtotal +=
      store.products_in_cart[i].productsInfo.price *
      store.products_in_cart[i].amount;
  }

  useEffect(() => {
    actions.getUserProductsInCart(params.theid);
  }, [store.products_in_cart]);

  const pagar = async () => {
    let total = subtotal * 1.22;
    console.log(total);
    await actions.pagoMercadoPago(total);
    let direccion = await store.mercadoPago.init_point;
    // console.log(direccion);
    window.location.replace(direccion);
  };

  return (
    <div
      className="container bg-naranja-200 border-marron m-auto rounded row p-5 pt-4 my-4"
      style={{
        width: "85%",
      }}
    >
      <p className="mb-3" style={{ height: "20px" }}>
        {store.products_in_cart.length} productos en el carrito
      </p>

      <div className="col-sm-8">
        <div className="bg-naranja-100 border-marron rounded">
          {/* __________________Lista_de_favoritos________________________ */}
          <ul className=" list-group list-group-flush m-auto my-1 p-0">
            <li className="list-group-item bg-naranja-100 text-marron border-marron">
              <h4>Carrito de compras</h4>
            </li>

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
                />
                <div className="w-50 d-flex">
                  <input
                    type="number"
                    className="form-control h-50 my-auto me-2"
                    placeholder="Cantidad"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={item.amount == null ? 0 : item.amount}
                    onChange={(e) =>
                      actions.setAmountInCart(
                        item.user_id,
                        item.product_id,
                        e.target.value
                      )
                    }
                  />
                  <button
                    className="float-end my-auto rounded bg-naranja-200 text-marron border-marron"
                    style={{
                      height: "35px",
                    }}
                    onClick={() =>
                      actions.borrarProductInCart(params.theid, item.product_id)
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
          <h4 className="w-50">Subtotal:</h4>
          <h4 className="text-end w-50">${subtotal}</h4>
        </div>

        <br />
        <div className="d-flex">
          <h4 className="w-50">Impuestos:</h4>
          <h4 className="text-end w-50">${subtotal * 0.22}</h4>
        </div>
        <hr className="my-3 border-marron opacity-75" />
        <div
          className="d-flex"
          style={{
            marginTop: "160px",
          }}
        >
          <h4 className="w-50">TOTAL:</h4>
          <h4 className="text-end w-50">${subtotal * 1.22}</h4>
        </div>
        <hr className="border-marron opacity-75" />
        <div className="d-flex row">
          <div className="logo col-sm-3">
            <img
              className="img-fluid"
              src="https://www.leccionesdearmonica.com/wp-content/uploads/2018/03/Logo-Mercado-Pago-fondocrema.png"
              alt="Logo de Mercado Pago"
            />
          </div>
          <div className="container col-sm-8 row">
            <button
              type="button"
              className="btn btn-sm rounded-1 bg-naranja-200 border-marron m-1"
              onClick={pagar}
            >
              Pagar
            </button>
            <button
              type="button"
              className="btn btn-sm rounded-1 bg-naranja-100 border-marron m-1"
              onClick={() => actions.vaciarCarrito(params.theid)}
            >
              Vaciar carrito.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
