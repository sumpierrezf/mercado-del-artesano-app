import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Catalogo } from "../component/catalogo";
import logo6_white_nobg from "../../img/logo6_white_nobg.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.obtenerInfoProductos();
    actions.getUserInfo(localStorage.user_id);
    actions.getUserProductsInCart(localStorage.user_id);
  }, []);
  // console.log(store.productos[0]);
  return (
    <>
      <div
        className="banner sw-100"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/fotos-premium/detalle-textura-ratan-artesania-bambu-tejido-textura-fondo-textura-tejido-artesanal_298352-891.jpg?w=2000)",
          backgroundSize: "100%",
        }}
      >
        <div className="text-light text-center h-100 d-flex justify-content-center align-items-center">
          <div className="mb-5 w-75">
            <img src={logo6_white_nobg} alt="" width={"150"} height={"auto"} />
            <h1>Mercado del Artesano</h1>
            <h5>
              Descubre la magia de los objetos artesanales y culturales en
              nuestro mercado en línea. Conoce a los artistas detrás de cada
              creación y apoya su trabajo mientras decoras tu hogar y vida con
              piezas únicas e irrepetibles. ¡Encuentra inspiración en nuestra
              comunidad de arte y crea tu propio estilo!
            </h5>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-naranja-300 shadow">
            <h1 className="text-light text-center mt-1 text-shadow">
              Catálogo de productos
            </h1>
          </div>
          {/* COLUMNA IZQUIERDA */}
          <div className="col-sm-3 col-lg-2 bg-naranja-200 shadow">
            <h4 className="text-center pt-3 mx-auto px-1">Categorías:</h4>
            <hr className="mb-3 mt-2 border-marron opacity-75" />
            <div className="d-grid gap-2 col-12 mx-auto">
              <button
                className="btn mx-auto w-75 text-marron bg-naranja-100 rounded shadow"
                onClick={actions.eliminarFiltro}
              >
                Todas
              </button>
              <select
                className="scroll-select w-75 d-grid gap-2 col-6 bg-naranja-100 text-marron form-select m-auto py-3 text-center shadow"
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
            <h4 className="text-center py-3 mx-auto px-1">Sobre nosotros:</h4>
            <hr className="mb-3 mt-2 border-marron opacity-75" />
            <div className="d-grid gap-2 col-12 mx-auto">
              <Link
                to={"/contacto/"}
                className="btn mx-auto w-75 text-marron bg-naranja-100 rounded mb-3 shadow"
              >
                Contacto
              </Link>
            </div>
          </div>
          {/* COLUMNA DERECHA */}
          <div className="col-sm-9 col-lg-10" style={{ minHeight: "500px" }}>
            <div
              className="d-flex justify-content-center mx-auto w-100 col-sm-8 col-lg-10 p-3"
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
