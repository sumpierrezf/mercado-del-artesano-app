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
        <select
          className="form-select m-auto my-3 p-0 text-center border-0"
          size="6"
          multiple
          aria-label="multiple select example"
          style={{ background: "#FDEEDC", color: "#7b4812" }}
        >
          <option defaultValue>Open this select menu</option>
          <option value="1">Tazas</option>
          <option value="2">Gorros</option>
          <option value="3">Madera</option>
          <option value="4">Tejidos</option>
          <option value="5">Pintura</option>
        </select>
        <ul className="list-group list-group-flush m-auto mb-3 p-0 text-center">
          <li
            className="list-group-item"
            style={{ background: "#FDEEDC", color: "#7b4812" }}
          >
            Tazas
          </li>
          <li
            className="list-group-item"
            style={{ background: "#FDEEDC", color: "#7b4812" }}
          >
            Gorros
          </li>
          <li
            className="list-group-item"
            style={{ background: "#FDEEDC", color: "#7b4812" }}
          >
            Madera
          </li>
          <li
            className="list-group-item"
            style={{ background: "#FDEEDC", color: "#7b4812" }}
          >
            Tejidos
          </li>
          <li
            className="list-group-item"
            style={{ background: "#FDEEDC", color: "#7b4812" }}
          >
            Pintura
          </li>
        </ul>
      </div>
      <div className="col-9">
        <div
          className="rounded"
          style={{ background: "#FDEEDC", border: "1px solid #7B4812" }}
        >
          <ul className="list-group list-group-flush m-auto my-1 p-0">
            <li
              className="list-group-item"
              style={{ background: "#FDEEDC", color: "#7b4812" }}
            >
              <h4>Favoritos</h4>
            </li>
            {store.fav_products.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex"
                style={{ background: "#FDEEDC", color: "#7b4812" }}
              >
                <FavLi
                  nombre={item.productsInfo.name}
                  precio={item.productsInfo.price}
                  imagen={item.productsInfo.img}
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
                  onClick={() => {
                    actions.borrarFavorito(params.theid, item.product_id),
                      console.log(item.product_id, params.theid);
                  }}
                >
                  Eliminar favorito
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
