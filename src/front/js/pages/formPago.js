import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormPago = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-8">
          <h5 className="text-center">Método de pago.</h5>
          <hr />
          <div className="container bg-naranja-200">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Tarjeta de crédito.
              </label>
              <p>
                <small>Ingrese los datos de su tarjeta.</small>
              </p>
            </div>
            {/* INPUTS DEL FORMULARIO */}
            <form>
              <div className="form-row flex-nowrap">
                <div className="form-group col-sm-8">
                  <label htmlFor="number">Número de la tarjeta</label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    maxLength="16"
                    className="form-control"
                    //   onChange={handleInputChange}
                    //   onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="expiry">Fecha de expiración</label>
                  <input
                    type="text"
                    name="expiry"
                    id="expiry"
                    maxLength="4"
                    className="form-control"
                    // onChange={handleInputChange}
                    // onFocus={handleFocusChange}
                  />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    maxLength="4"
                    className="form-control"
                    // onChange={handleInputChange}
                    // onFocus={handleFocusChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxLength="30"
                  className="form-control"
                  //   onChange={handleInputChange}
                  //   onFocus={handleFocusChange}
                />
              </div>
            </form>
          </div>
          <hr />
        </div>
        <div className="col-sm-6 col-lg-4">
          <h5 className="text-center">Total.</h5>
          <hr />
        </div>
      </div>
    </div>
  );
};
FormPago.propTypes = {
  match: PropTypes.object,
};
