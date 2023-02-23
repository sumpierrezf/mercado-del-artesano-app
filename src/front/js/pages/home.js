import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Catalogo } from "../component/catalogo";
import banner1 from "../../img/banner1.jpg";
import logo6_white_nobg from "../../img/logo6_white_nobg.png";

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
        className="banner sw-100"
        style={{
          // backgroundImage: `url(${banner1})`,
          // backgroundImage:
          //   "url(https://previews.123rf.com/images/malven/malven1711/malven171100034/90439031-fondo-y-textura-de-lana-tejida-o-tela-de-algod%C3%B3n-color-marr%C3%B3n-de-primer-plano.jpg)",
          // backgroundImage:
          //   "url(https://static.vecteezy.com/system/resources/previews/005/273/505/non_2x/light-brown-knitted-fabric-texture-background-top-view-copy-empty-space-for-text-photo.jpg)",
          backgroundImage:
            "url(https://img.freepik.com/fotos-premium/detalle-textura-ratan-artesania-bambu-tejido-textura-fondo-textura-tejido-artesanal_298352-891.jpg?w=2000)",
          // backgroundImage:
          //   "url(https://img.freepik.com/fotos-premium/textura-lana-tejido-punto-cerca_110241-247.jpg?w=2000)",
          backgroundSize: "100%",
        }}
      >
        <div className="text-light text-center h-100 d-flex justify-content-center align-items-center">
          <div className="mb-5 w-75">
            <img src={logo6_white_nobg} alt="" width={"150"} height={"auto"} />
            <h1>Mercado del Artesano</h1>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              cupiditate at harum dolorum sit numquam tenetur dolores culpa
              tempora reprehenderit! At et magnam eos tempora nemo id
              praesentium soluta eveniet!
            </h5>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-naranja-300 shadow">
            <h1 className="text-light text-center mt-1">
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
