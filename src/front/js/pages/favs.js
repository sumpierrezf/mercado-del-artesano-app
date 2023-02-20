import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams, Navigate } from "react-router-dom";
import "../../styles/home.css";

import { FavLi } from "../component/favli";

export const Favs = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUserFavs(store.user_id);
  }, [store.fav_products]);

  return (
    <>
      {store.auth === false ? (
        <Navigate to="/login" />
      ) : (
        <div className="col-11 row bg-naranja-200 border-marron m-auto rounded p-5 pt-4 my-4">
          <p className="col-12 text-end mb-3" style={{ height: "20px" }}>
            {store.fav_products.length} favoritos
          </p>
          <div className="bg-naranja-100 border-marron col-sm-3 col-lg-2 rounded">
            <h5 className="mt-3 text-center">Categoría</h5>
            <hr className="my-1 border-marron" />
            <div className="w-100 d-flex justify-content-center">
              <button
                className="btn text-marron bg-naranja-100 rounded mt-3"
                style={{
                  height: "35px",
                }}
                onClick={actions.eliminarFiltro}
              >
                Todas
              </button>
            </div>
            <select
              className="scroll-select bg-naranja-100 text-marron form-select m-auto mb-3 p-0 text-center border-0"
              size="5"
              multiple
              aria-label="multiple select example"
              onClick={actions.handleCategory}
            >
              <option value="Tazas">Tazas</option>
              <option value="Gorros">Gorros</option>
              <option value="Madera">Madera</option>
              <option value="Tejidos">Tejidos</option>
              <option value="Pintura">Pintura</option>
            </select>
          </div>

          <div className="col-sm-9 col-lg-10" style={{ minHeight: "234" }}>
            <div className="bg-naranja-100 border-marron rounded h-100">
              {/* __________________Lista_de_favoritos________________________ */}
              <ul className=" list-group list-group-flush m-auto my-1 p-0">
                <li className="list-group-item bg-naranja-100 text-marron border-marron">
                  <h4>Favoritos</h4>
                </li>

                {/* __________________MAP________________________ */}
                {store.fav_products
                  .filter((item) =>
                    item.productsInfo.category.includes(store.categoria)
                  )
                  .map((item, index) => (
                    <li
                      key={index}
                      className="bg-naranja-100 border-marron text-marron container list-group-item d-flex w-100"
                    >
                      <FavLi
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
                            actions.borrarFavorito(
                              store.user_id,
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
        </div>
      )}
    </>
  );
};
