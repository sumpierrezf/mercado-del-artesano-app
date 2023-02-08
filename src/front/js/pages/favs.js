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
      className="m-auto rounded row p-5 pt-4 my-4"
      style={{
        background: "#FFD8A9",
        width: "85%",
        border: "1px solid #7B4812",
      }}
    >
      <p className="text-end mb-1">{store.fav_products.length} favoritos</p>
      <div
        className="col-3 rounded"
        style={{ background: "#FDEEDC", border: "1px solid #7B4812" }}
      >
        <h4 className="mt-3 text-center">Categoría</h4>
        <hr className="my-1" style={{ background: "#7B4812" }} />
        <button
          className="rounded w-50 mt-3 mx-5"
          style={{
            background: "#FFD8A9",
            color: "#7b4812",
            border: "1px solid #7b4812",
            height: "35px",
          }}
          onClick={actions.eliminarFiltro}
        >
          Todas
        </button>
        <select
          className="form-select m-auto my-3 p-0 text-center border-0"
          size="5"
          multiple
          aria-label="multiple select example"
          style={{ background: "#FDEEDC", color: "#7b4812" }}
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
        <div
          className="rounded"
          style={{ background: "#FDEEDC", border: "1px solid #7B4812" }}
        >
          {/* __________________Lista_de_favoritos________________________ */}
          <ul className="list-group list-group-flush m-auto my-1 p-0">
            <li
              className="list-group-item"
              style={{ background: "#FDEEDC", color: "#7b4812" }}
            >
              <h4>Favoritos</h4>
            </li>
            {/* __________________MAP________________________ */}
            {/* store.categoria = "Todas" ? */}
            {store.fav_products
              .filter((item) =>
                item.productsInfo.category.includes(store.categoria)
              )
              .map((item, index) => (
                <li
                  key={index}
                  className="container list-group-item d-flex w-100"
                  style={{ background: "#FDEEDC", color: "#7b4812" }}
                >
                  <FavLi
                    nombre={item.productsInfo.name}
                    precio={item.productsInfo.price}
                    imagen={item.productsInfo.img1}
                  />
                  <button
                    className="float-end rounded"
                    style={{
                      background: "#FFD8A9",
                      color: "#7b4812",
                      border: "1px solid #7b4812",
                      height: "35px",
                      width: "230px",
                      marginTop: "35px",
                    }}
                    onClick={() =>
                      actions.borrarFavorito(params.theid, item.product_id)
                    }
                  >
                    Eliminar favorito
                  </button>
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
