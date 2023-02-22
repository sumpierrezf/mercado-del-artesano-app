import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Catalogo } from "../component/catalogo";
export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.obtenerInfoProductos();
    actions.getUserInfo(localStorage.user_id);
  }, []);
  // console.log(store.productos[0]);
  return (
    <>
      <div
        className="w-100"
        style={{
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/004/727/248/non_2x/realistic-knitted-background-with-snowflakes-seamless-texture-of-wool-gray-knit-norwegian-pattern-template-of-knitwear-for-wallpaper-christmas-and-new-year-greeting-card-webpage-backdrop-vector.jpg)",
          backgroundSize: "100%",
          height: "500px",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="container-fluid bg-naranja-100">
        <div className="row">
          {/* COLUMNA IZQUIERDA */}
          <div className="col-sm-3 col-lg-2 bg-naranja-200 border-marron-end">
            <h4 className="text-center py-3 mx-auto px-1">Categorías:</h4>
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                className="btn mx-auto w-75 text-marron bg-naranja-100 rounded"
                onClick={actions.eliminarFiltro}
              >
                Todas
              </button>
              <select
                className="scroll-select w-75 d-grid gap-2 col-6 bg-naranja-100 text-marron form-select m-auto py-3 text-center"
                size="6"
                multiple
                aria-label="multiple select example"
                onClick={actions.handleCategory}
              >
                <option className="mb-2" value="Tazas">
                  Tazas
                </option>
                <option className="mb-2" value="Gorros">
                  Gorros
                </option>
                <option className="mb-2" value="Madera">
                  Madera
                </option>
                <option className="mb-2" value="Tejidos">
                  Tejidos
                </option>
                <option value="Pinturas">Pinturas</option>
              </select>
            </div>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="col-sm-9 col-lg-10">
            <h2 className="col-sm-8 col-lg-10 p-3 pb-0 mx-auto text-center">
              Catálogo de productos
            </h2>
            <div
              className="d-flex justify-content-center mx-auto w-100 col-sm-8 col-lg-10 p-3 pt-0"
              // style={{ overflowX: "scroll", height: "55 0px" }}
            >
              <div className="d-flex justify-content-center row">
                {store.productos
                  ?.filter((item) => item.category.includes(store.categoria))
                  .map((cadaProducto, index) => (
                    <Catalogo
                      key={index}
                      id={cadaProducto.id}
                      name={cadaProducto.name}
                      category={cadaProducto.category}
                      price={cadaProducto.price}
                      amount={cadaProducto.amount}
                      img1={cadaProducto.img1}
                      user_id={localStorage.user_id}
                      product_id={cadaProducto.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
