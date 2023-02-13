import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormPago = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-8 mt-5">
          <h5 className="text-center">Método de pago.</h5>
          <hr />
          {/* INPUTS DEL FORMULARIO */}
          <div className="container bg-naranja-200 border-marron p-3">
            <form>
              <div className="form-check">
                <input
                  className="form-check-input border-marron bg-naranja-100"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Tarjeta de crédito.
                </label>
                <p>
                  <small>Ingrese los datos de su tarjeta.</small>
                </p>
              </div>
              <div className="form-row d-flex">
                <div className="form-group col-sm-7 me-3">
                  <label htmlFor="number"></label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control border-marron bg-naranja-100"
                    placeholder="Número de la tarjeta"
                    //   onChange={handleInputChange}
                    //   onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group col-sm-2 me-3">
                  <label htmlFor="expiry"></label>
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    maxLength="4"
                    className="form-control border-marron bg-naranja-100"
                    placeholder="MM/YY"
                    // onChange={handleInputChange}
                    // onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group col-sm-2 me-2">
                  <label htmlFor="cvc"></label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    maxLength="4"
                    className="form-control border-marron bg-naranja-100"
                    placeholder="CVC"
                    // onChange={handleInputChange}
                    // onFocus={handleFocusChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxLength="30"
                  className="form-control border-marron bg-naranja-100"
                  placeholder="Nombre del titular de la tarjeta"
                  //   onChange={handleInputChange}
                  //   onFocus={handleFocusChange}
                />
              </div>
            </form>
          </div>
          <hr />
          <div className="d-flex container justify-content-between bg-naranja-200 border-marron p-3 mb-3">
            <div className="form-check col-sm-7">
              <input
                className="form-check-input border-marron bg-naranja-100"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Mercado Pago.
              </label>
              <p>
                <small>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi sunt a voluptate autem dolore, quibusdam officiis,
                  libero rem modi, expedita possimus. Autem, molestiae.
                  Consequatur doloremque laboriosam nobis incidunt eveniet enim!
                </small>
              </p>
            </div>
            <div className="logo col-sm-3">
              <img
                className="img-fluid"
                src="https://www.leccionesdearmonica.com/wp-content/uploads/2018/03/Logo-Mercado-Pago-fondocrema.png"
                alt="Logo de Mercado Pago"
              />
            </div>
          </div>
          <hr />
          <div className="m-3">
            <button
              type="button"
              className="btn btn-sm rounded-1 bg-naranja-200 border-marron m-3 px-3"
            >
              Pagar
            </button>
            <button
              type="button"
              className="btn btn-sm rounded-1 bg-naranja-100 border-marron px-3"
            >
              Cancelar
            </button>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mt-5">
          <h5 className="text-center">Total.</h5>
          <hr />
          <div className="row col-sm-12">
            <div className="d-flex container col-sm-12 justify-content-between">
              <img
                className="img-fluid rounded-1 border-marron me-3 h-50"
                src="https://ss425.liverpool.com.mx/xl/1113186841.jpg"
              />
              <div className="container">
                <p>nombre de producto</p>
                <p>$ precio</p>
              </div>
            </div>
            <hr />
            {/* VOUCHER */}
            <div className="container col-sm-12 m-3">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Tienes un voucher?</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
            <hr />
            <div className="container col-sm-12">
              <p>subtotal</p>
              <p>impuestos</p>
              <hr />
              <p>TOTAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
FormPago.propTypes = {
  match: PropTypes.object,
};
