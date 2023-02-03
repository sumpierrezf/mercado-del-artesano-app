import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Products = ({
  id,
  nombre,
  categoria,
  precio,
  stock,
  //descripcion,
  //condicion,
}) => {
  const { actions } = useContext(Context);

  return (
    <>
      <div
        className="d-flex container"
        style={{
          backgroundColor: "#FFD8A9",
        }}
      >
        <h3> Categorias </h3> <p> Tazas </p> <p> Gorros </p> <p> Madera </p>{" "}
        <p> Tejidos </p> <p> Pinturas </p>{" "}
      </div>{" "}
      <div
        className="card"
        style={{
          width: "18rem",
        }}
      >
        <img src={"..." + id + ".jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {nombre} </h5>{" "}
          <p className="card-text"> {categoria} </p>{" "}
          <p className="card-text"> {precio} </p>{" "}
          <p className="card-text"> {stock} </p>{" "}
          {/* <p className="card-text">{descripcion}</p>
                                            <p className="card-text">{condicion}</p> */}{" "}
          <Link to={"..." + id} className="btn btn-primary">
            prueba{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>{" "}
            {/* Info del producto:{id} */}{" "}
          </Link>{" "}
          <button
            className="btn text-danger"
            // onClick={() => actions.agregarFavorito(nombre)}
          ></button>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
