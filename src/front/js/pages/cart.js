import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

import { CartLi } from "../component/cartli";

export const Cart = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUserProductsInCart(params.theid);
  }, [store.products_in_cart]);

  return (
    <div
      className="bg-naranja-200 border-marron m-auto rounded row p-5 pt-4 my-4 h-100"
      style={{
        width: "85%",
      }}
    >
      <p className="text-end mb-0" style={{ height: "20px" }}>
        {store.products_in_cart.length} productos en el carrito
      </p>

      <div className="col-8">
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
                <div className="w-50">
                  <button
                    className="float-end rounded bg-naranja-200 text-marron border-marron"
                    style={{
                      height: "35px",
                      marginTop: "35px",
                    }}
                    onClick={() =>
                      actions.borrarProductInCart(params.theid, item.product_id)
                    }
                  >
                    Eliminar del carrito
                  </button>
                </div>
              </li>
            ))}
            {/* __________________Cierre_de_MAP________________________ */}
          </ul>
          {/* __________________Cierre_de_lista_de_favoritos________________________ */}
        </div>
      </div>
      <div className="bg-naranja-100 border-marron col-4 rounded">
        <h4 className="mt-3 text-center">Total</h4>
        <hr className="my-1 border-marron opacity-75" />
        <br />
        <h5>
          Subtotal:
          {/* {store.products_in_cart.productsInfo.price} */}
        </h5>
        <br />
        <h5>
          Impuestos:
          {/* {
            store.products_in_cart.filter((item) =>
              item.product_id.includes(params.theid)
            ).productsInfo.price
          } */}
        </h5>
        <hr className="my-3 border-marron opacity-75" />
        <h4>TOTAL:</h4>
        <hr
          className="border-marron opacity-75"
          style={{
            marginTop: "200px",
          }}
        />
        <div className="w-100 d-flex justify-content-center">
          <button className="mt-4 mx-auto w-75 rounded bg-naranja-200 text-marron border-marron">
            Continuar compra
          </button>
        </div>
      </div>
    </div>
  );
};
