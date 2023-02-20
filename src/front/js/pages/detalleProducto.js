import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleProducto = ({ id }) => {
  const { store, actions } = useContext(Context);
  const [cantidad, setCantidad] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState("");
  const params = useParams();

  async function agregarComentario(e) {
    e.preventDefault();
    await actions.crearReviews(params.theid, comment, stars);
    setComment("");
  }
  console.log(comment);

  function calificar(e) {
    setStars(e.target.value);
  }
  console.log(stars);

  console.log(store.getReviews);
  // console.log(store.detalleProducto.id);
  // function agregarAlCarrito() {
  //   // console.log("funciona");
  //   let producto = cantidad;
  //   setCarrito([...carrito, producto]);
  //   console.log(producto);
  // }
  console.log(cantidad);
  useEffect(() => {
    actions.obtenerDetalleProducto(params.theid);
    actions.obtenerReviews(params.theid);
    actions.getSellerProducts(store.detalleProducto.user_id);
  }, []);
  console.log(store.sellerProducts);
  console.log(store.detalleProducto.user_id);

  let sellerCalification = 0;

  for (let i = 0; i < store.sellerProducts.length; i++) {
    sellerCalification += store.sellerProducts[i]?.reviews[i]?.calification;
    // /
    // store.sellerProducts.length;
  }
  console.log(store.sellerProducts[0]?.reviews[0]?.calification);
  console.log(sellerCalification);

  return (
    <div className="container flex-wrap p-3 m-3 rounded-1 bg-naranja-200 border-marron text-marron">
      {/* PRIMERA SECCION O FILA*/}
      <div className="row">
        {/* PRIMER COLUMNA */}
        <div className="container flex-direction-column col-sm-2 rounded-1">
          <img
            className="img-fluid m-1 rounded-1 border-marron"
            src={store.detalleProducto.img4}
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
            src={store.detalleProducto.img1}
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
              {store.detalleProducto.name}
              <button
                className="btn text-danger float-end"
                onClick={() =>
                  localStorage.user_id == null
                    ? alert("Debes iniciar sesión")
                    : actions.addToFavorites(
                        localStorage.user_id,
                        store.detalleProducto.id
                      )
                }
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
              Stock disponible: {store.detalleProducto.amount} unidades
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
              onClick={() =>
                localStorage.user_id == null
                  ? alert("Debes iniciar sesión")
                  : actions.agregarAlCarrito(
                      localStorage.user_id,
                      store.detalleProducto.id,
                      cantidad
                    )
              }
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
        <div className="col-sm-4 me-4 mb-3 p-2 rounded-1 border-marron bg-naranja-100">
          <h4>{store.detalleProducto.sellerInfo?.first_name}</h4>
          <div>
            {/* ICONO UBICACION */}
            <p>
              <i className="fas fa-map-marker-alt m-1"></i>
              {store.detalleProducto.sellerInfo?.city}
              {", "}
              {store.detalleProducto.sellerInfo?.country}
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
            <form>
              <p className="clasificacion">
                <input
                  id="radio1"
                  type="radio"
                  name="estrellas"
                  onClick={calificar}
                  value={5}
                />
                <label htmlFor="radio1">★</label>
                <input
                  id="radio2"
                  type="radio"
                  name="estrellas"
                  onClick={calificar}
                  value={4}
                />
                <label htmlFor="radio2">★</label>
                <input
                  id="radio3"
                  type="radio"
                  name="estrellas"
                  onClick={calificar}
                  value={3}
                />
                <label htmlFor="radio3">★</label>
                <input
                  id="radio4"
                  type="radio"
                  name="estrellas"
                  onClick={calificar}
                  value={2}
                />
                <label htmlFor="radio4">★</label>
                <input
                  id="radio5"
                  type="radio"
                  name="estrellas"
                  onClick={calificar}
                  value={1}
                />
                <label htmlFor="radio5">★</label>
              </p>
            </form>
          </h3>
          <div className="form-floating border-marron bg-naranja-100 mb-2">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <label htmlFor="floatingTextarea">Comentarios</label>
          </div>
          <button
            className="btn bg-naranja-200 mb-2"
            onClick={agregarComentario}
          >
            <small>Agregar comentario.</small>
          </button>
          <div className="container col-sm-12 rounded-1 border-marron bg-naranja-200 m-1 pb-2">
            <div className="container">
              <p>Comentarios de los clientes:</p>
              {store.getReviews.map((item, index) => (
                <div
                  className="container col-sm-12 rounded-1 bg-naranja-100 m-1 text-start p-1"
                  key={index}
                >
                  {store.user_info.first_name} calificó {""}
                  {item.calification} estrellas
                  <br />
                  {item.reviews}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
DetalleProducto.propTypes = {
  match: PropTypes.object,
};
