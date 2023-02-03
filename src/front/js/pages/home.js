import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Products } from "../component/products";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div
        className="d-flex container mb-5"
        style={{ overflowX: "scroll", height: "570px" }}
      >
        <h1>Catalogo de productos.</h1>
        <div className="d-flex flex-nowrap row row-cols-4">
          <Products />
          {/* {store.productos.map((cadaProducto, index) => (
            <Products
              key={index}
              id={index + 1}
              nombre={cadaProducto.name}
              categoria={cadaProducto.category}
              precio={cadaProducto.price}
              stock={cadaProducto.amount}
              descripcion={cadaProducto.description}
              condicion={cadaProducto.condition}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};
