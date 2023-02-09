import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleProducto = ({ id }) => {
  const { store, actions } = useContext(Context);
  const [cantidad, setCantidad] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const params = useParams();

  // function agregarAlCarrito() {
  //   // console.log("funciona");
  //   let producto = cantidad;
  //   setCarrito([...carrito, producto]);
  //   console.log(producto);
  // }
  console.log(cantidad);
  useEffect(() => {
    actions.obtenerDetalleProducto(params.theid);
  }, []);
  console.log(store.detalleProducto);

  return (
    <div className="container flex-wrap p-3 m-3 rounded-1 bg-naranja-200 border-marron text-marron">
      {/* PRIMERA SECCION O FILA*/}
      <div className="row">
        {/* PRIMER COLUMNA */}
        <div className="container flex-direction-column col-sm-2 rounded-1">
          <img
            className="img-fluid m-1 rounded-1 border-marron"
            src={store.detalleProducto.img1}
          />
          <img
            className="img-fluid m-1 rounded-1 border-marron"
            src={store.detalleProducto.img2}
          />
          <img
            className="img-fluid m-1 rounded-1 border-marron"
            src={store.detalleProducto.img3}
          />
        </div>
        {/* SEGUNDA COLUMNA, IMAGEN CENTRAL */}
        <div className="d-flex container col-sm-4 rounded-1 border-marron">
          <img
            className="img-fluid m-1 rounded-1"
            src={store.detalleProducto.img4}
          />
        </div>
        {/* TERCER COLUMNA, NOMBRE DEL PRODUCTO Y DEMAS INFO */}
        <div className="col-sm-4 me-4 mb-3 rounded-1 border-marron bg-naranja-100">
          <div className="d-flex p-1 m-1">
            <p className="me-1">Estado: {store.detalleProducto.condition}</p>
            {/*aca tengo q traer la condicion del producto*/}
            <p className="me-1">|</p>
            <p>Nro. veces vendido</p>
          </div>
          <div className="producto">
            <h4>
              Nombre del producto: {store.detalleProducto.name}
              <button
                className="btn text-danger"
                onClick={() => actions.agregarFavorito(id)}
              >
                <i className="fa fa-heart" />
              </button>
            </h4>
            <p>Precio original tachado si el prod. esta en oferta</p>
            <p>
              Precio: {store.detalleProducto.price} /precio oferta:{" "}
              {/*aca tengo q traer el precio del producto*/}
            </p>
            <p>
              Stock disponible: {store.detalleProducto.amount} /no disponible:{" "}
              {/*aca tengo q traer el stock del producto*/}
            </p>
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
          </div>
          {/* Boton de agregar al carrito */}
          <div className=" text-center m-3">
            <button
              type="button"
              className="btn btn-sm rounded-1 bg-naranja-200"
              // onClick={() =>
              //   actions.agregarAlCarrito({
              //     name: store.detalleProducto.name,
              //     category: store.detalleProducto.category,
              //     price: store.detalleProducto.price,
              //     amount: store.detalleProducto.amount,
              //     description: store.detalleProducto.description,
              //     condition: store.detalleProducto.condition,
              //     img1: store.detalleProducto.img1,
              //     img2: store.detalleProducto.img2,
              //     img3: store.detalleProducto.img3,
              //     img4: store.detalleProducto.img4,
              //   })
              // }
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
          <h4>
            Descripción: {/*aca tengo q traer la descripcion del producto*/}
          </h4>
          <p>{store.detalleProducto.description}</p>
        </div>
        {/* INFO DEL VENDEDOR */}
        <div className="col-sm-4 me-4 mb-3 p-1 rounded-1 border-marron bg-naranja-100">
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
        <div className="container col-sm-12 text-center rounded-1 border-marron bg-naranja-100">
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
