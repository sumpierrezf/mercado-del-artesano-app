import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";

import { FavLi } from "../component/favli";

export const Favs = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.getUserFavs(params.theid);
  }, [store.fav_products]);

  return (
    <div
      className="bg-naranja-200 border-marron m-auto rounded row p-5 pt-4 my-4 h-100"
      style={{
        width: "85%",
      }}
    >
      <p className="text-end mb-0" style={{ height: "20px" }}>
        {store.fav_products.length} favoritos
      </p>
      <div className="bg-naranja-100 border-marron col-3 rounded">
        <h4 className="mt-3 text-center">Categoría</h4>
        <hr className="my-1 border-marron" />
        <div className="w-100 d-flex justify-content-center">
          <button
            className="text-marron bg-naranja-200 border-marron rounded w-50 mt-3"
            style={{
              height: "35px",
            }}
            onClick={actions.eliminarFiltro}
          >
            Todas
          </button>
        </div>
        <select
          className="bg-naranja-100 text-marron form-select m-auto my-3 p-0 text-center border-0"
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
      <div className="col-9">
        <div className="bg-naranja-100 border-marron rounded">
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
                        actions.borrarFavorito(params.theid, item.product_id)
                      }
                    >
                      Eliminar favorito
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
  );
};
