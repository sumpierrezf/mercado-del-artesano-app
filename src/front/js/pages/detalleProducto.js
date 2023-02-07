import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleProducto = ({
  id,
  name,
  category,
  price,
  amount,
  description,
  condition,
  img,
}) => {
  const { store, actions } = useContext(Context);
  const [cantidad, setCantidad] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const params = useParams();

  // function agregarAlCarrito() {
  //   // console.log("funciona");
  //   let producto = cantidad;
  //   setCarrito([...carrito, producto]);
  //   console.log(producto);

  const agregarAlCarrito = () => {
    setCarrito((carrito) => {
      let productoExiste = carrito.find(
        (cadaProducto) => cadaProducto.id === id
      );
      if (productoExiste) {
        return carrito.map((cadaProducto) => {
          if (cadaProducto.id === id) {
            return { ...cadaProducto, cantidad: cadaProducto.cantidad + 1 };
          } else {
            return cadaProducto;
          }
        });
      } else {
        return [...carrito, { id, cantidad: 1, price }];
      }
    });
  };

  //   useEffect(() => {
  //     actions.obtenerDetalleProducto(params.theid);
  //   }, []);

  return (
    <div
      className="container flex-wrap p-3 m-3 rounded-1"
      style={{
        backgroundColor: "#FFD8A9",
        border: "1px solid #7B4812",
        color: "#7B4812",
      }}
    >
      {/* PRIMERA SECCION O FILA*/}
      <div className="row">
        {/* PRIMER COLUMNA */}
        <div className="container flex-direction-column col-sm-2 rounded-1">
          <img
            className="img-fluid m-1 rounded-1"
            style={{ border: "1px solid #7B4812" }}
            src={
              "https://m.media-amazon.com/images/I/31PrcIMrQ2L._AC_SY350_.jpg"
            }
          />
          <img
            className="img-fluid m-1 rounded-1"
            style={{ border: "1px solid #7B4812" }}
            src={
              "https://m.media-amazon.com/images/I/31PrcIMrQ2L._AC_SY350_.jpg"
            }
          />
          <img
            className="img-fluid m-1 rounded-1"
            style={{ border: "1px solid #7B4812" }}
            src={
              "https://m.media-amazon.com/images/I/31PrcIMrQ2L._AC_SY350_.jpg"
            }
          />
        </div>
        {/* SEGUNDA COLUMNA, IMAGEN CENTRAL */}
        <div
          className="d-flex container col-sm-4 rounded-1"
          style={{ border: "1px solid #7B4812" }}
        >
          <img
            className="img-fluid m-1 rounded-1"
            src={
              "https://m.media-amazon.com/images/I/31PrcIMrQ2L._AC_SY350_.jpg"
            }
          />
        </div>
        {/* TERCER COLUMNA, NOMBRE DEL PRODUCTO Y DEMAS INFO */}
        <div
          className="col-sm-4 me-4 mb-3 rounded-1"
          style={{
            backgroundColor: "#FDEEDC",
            border: "1px solid #7B4812",
          }}
        >
          <div className="d-flex p-1 m-1">
            <p className="me-1">Estado: {store.infoProducto.condition}</p>
            <p className="me-1">|</p>
            <p>Nro. veces vendido</p>
          </div>
          <div className="producto">
            <h4>
              Nombre del producto: {store.infoProducto.name}
              <button
                className="btn text-danger"
                onClick={() => actions.agregarFavorito(nombre)}
              >
                <i className="fa fa-heart" />
              </button>
            </h4>
            <p>Precio original tachado si el prod. esta en oferta</p>
            <p>Precio/precio oferta: {store.infoProducto.price}</p>
            <p>Stock disponible/no disponible: {store.infoProducto.amount}</p>
            {/* Seleccionar cantidad */}
            <div className="input-group mb-3 rounded-1">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Cantidad
              </button>
              <input
                type="number"
                className="form-control"
                placeholder="Ingrese la cantidad"
                value={cantidad}
                onChange={(e) => {
                  setCantidad(e.target.value);
                }}
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
            {/* <select
              className="form-select"
              aria-label="Default select example"
              value={cantidad}
              onChange={(e) => {
                setCantidad(e.target.value);
              }}
              style={{ backgroundColor: "#FFD8A9" }}
            >
              <option value={0}>Cantidad</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select> */}
          </div>
          {/* Boton de agregar al carrito */}
          <div className=" text-center m-3">
            <button
              type="button"
              className="btn btn-sm rounded-1"
              onClick={() => agregarAlCarrito()}
              style={{ backgroundColor: "#FFD8A9" }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
      <hr />
      {/* SEGUNDA SECCION O FILA*/}
      <div className="row justify-content-between">
        <div className="col-sm-7 m-2 p-3">
          <h4>Descripción: {store.infoProducto.description}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odit
            corrupti enim quas. Natus, explicabo! Natus id voluptates aperiam
            similique vitae, facilis sed officia dignissimos ducimus? Est autem
            corrupti cumque.
          </p>
        </div>
        {/* INFO DEL VENDEDOR */}
        <div
          className="col-sm-4 me-4 mb-3 p-1 rounded-1"
          style={{
            backgroundColor: "#FDEEDC",
            border: "1px solid #7B4812",
          }}
        >
          <h4>Nombre del vendedor.</h4>
          <div>
            {/* ICONO UBICACION */}
            <p>
              <i className="fas fa-map-marker-alt m-1"></i>
              Ubicación:
            </p>
          </div>
          <div>
            {/* ICONO barra de progreso? */}
            <p>
              <i className="fas fa-bars m-1"></i>
              Calificación:
            </p>
          </div>
          <div>
            <p>Ventas:</p>
          </div>
        </div>
        {/* CALIFICACIONES DE CLIENTES */}
        <div
          className="container col-sm-12 text-center rounded-1"
          style={{
            backgroundColor: "#FDEEDC",
            border: "1px solid #7B4812",
          }}
        >
          <h3>
            Califica este producto
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
          </h3>
        </div>
      </div>
    </div>
  );
};

DetalleProducto.propTypes = {
  match: PropTypes.object,
};
