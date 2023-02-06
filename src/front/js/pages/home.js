import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Products } from "../component/products";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#FDEEDC",
      }}
    >
      <div className="row mb-5">
        <div
          className="col-sm-4 col-lg-2"
          style={{
            backgroundColor: "#FFD8A9",
          }}
        >
          <h3 className="col-sm-4 col-lg-2 p-3">Categorías:</h3>
          <div className="d-grid gap-2 col-6 mx-1">
            <button type="button" className="btn btn-link">
              Tazas
            </button>
            <button type="button" className="btn btn-link">
              Gorros
            </button>
            <button type="button" className="btn btn-link">
              Madera
            </button>
            <button type="button" className="btn btn-link">
              Tejidos
            </button>
            <button type="button" className="btn btn-link">
              Pinturas
            </button>
          </div>
        </div>
        <div className="col-sm-8 col-lg-10">
          <h1 className="text-center">Catálogo de productos.</h1>
          <div className="container col-sm-1 col-lg-3 p-3 mb-3 ms-5">
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
    </div>
  );
};
