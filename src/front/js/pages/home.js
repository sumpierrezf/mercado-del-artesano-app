import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Catalogo } from "../component/catalogo";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.obtenerInfoProductos();
  }, []);

  return (
    <div className="container-fluid h-100 bg-naranja-100">
      <div className="row mb-5">
        {/* COLUMNA IZQUIERDA */}
        <div className="col-sm-4 col-lg-2 bg-naranja-200">
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
        {/* COLUMNA DERECHA */}
        <div className="container col-sm-8 col-lg-10">
          <h1 className="text-center">Catálogo de productos.</h1>
          <div
            className="d-flex container col-sm-1 col-lg-3 p-3 mb-3 ms-5"
            style={{ overflowX: "scroll", height: "570px" }}
          >
            <div className="d-flex flex-nowrap row row-cols-4">
              {store.productos.map((cadaProducto, index) => (
                <Catalogo
                  key={index}
                  id={index + 1}
                  name={cadaProducto.name}
                  category={cadaProducto.category}
                  price={cadaProducto.price}
                  amount={cadaProducto.amount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
