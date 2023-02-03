import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { store, actions } = useContext(Context);

  function enviarDatos(e) {
    e.preventDefault();
    actions.signup(email, password, username);
    actions.login(email, password, username);
    setEmail("");
    setPassword("");
    setUsername("");
  }

  return (
    <>
      <h1>Registro de usuario.</h1>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <div className="container">
          <form
            className=" w-50 mx-auto container"
            // onSubmit={enviarDatos}
          >
            {/* ______________________Nombre_______________________________________ */}

            <div class="col-md-6">
              <label htmlFor="exampleInputName1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Nombre"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* __________________________Apellido_______________________________________________ */}

            <div class="col-md-6">
              <label
                htmlFor="exampleInputApellido1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputApellido1"
                aria-describedby="apellidoHelp"
                placeholder="Apellido"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* ________________________Email______________________________________________ */}
            <div className="mb-3 container">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              ></label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* __________________________Password____________________________________________ */}
            <div className="mb-3 container">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              ></label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* _________________________Fecha de nacimiento_____________________________________ */}
            <div className="mb-3 container">
              <label
                htmlFor="exampleInputFecha1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFechal1"
                aria-describedby="fechaHelp"
                placeholder="Fecha de Nacimiento"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* ____________________________Direccion__________________________________________ */}

            <div className="mb-3 container">
              <label
                htmlFor="exampleInputDireccion1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputDireccionl1"
                aria-describedby="direccionHelp"
                placeholder="Direccion"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* ____________________________pais__________________________________________ */}

            <div class="dropdown col-md-6">
              <a
                class="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pais
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Uruguay
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Otro
                  </a>
                </li>
              </ul>
            </div>

            {/* _____________________Ciudad___________________________________________ */}
            <div class="col-md-6">
              <label
                htmlFor="exampleInputCiudad1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCiudad1"
                aria-describedby="ciduadHelp"
                placeholder="Ciudad"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* ________________________Codigo Postal______________________________________________ */}
            <div class="col-md-6">
              <label
                htmlFor="exampleInputCodigo1"
                className="form-label"
              ></label>
              <input
                type="number"
                className="form-control"
                id="exampleInputCodigo1"
                aria-describedby="codigoHelp"
                placeholder="Codigo Postal"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* _______________________Telefono_______________________________________________ */}
            <div class="col-md-6">
              <label
                htmlFor="exampleInputTelefono1"
                className="form-label"
              ></label>
              <input
                type="number"
                className="form-control"
                id="exampleInputTelefono1"
                aria-describedby="telefonoHelp"
                placeholder="Telefono"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* ________________________botones______________________________________________ */}
            <div>
              <button type="submit" class="btn btn-secondary">
                Cancelar
              </button>
              <button type="submit" class="btn btn-secondary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
