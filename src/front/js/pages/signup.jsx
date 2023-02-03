import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const { store, actions } = useContext(Context);

  // function enviarDatos(e) {
  //   e.preventDefault();
  //   actions.signup(email, password, username);
  //   actions.login(email, password, username);
  //   setEmail("");
  //   setPassword("");
  //   setUsername("");
  // }

  return (
    <>
      <div style={{ backgroundColor: "#FDEEDC" }}>
        <h2
          className="d-flex justify-content-center"
          style={{ backgroundColor: "#FDEEDC" }}
        >
          Registro de usuario
        </h2>

        <div
          class="d-flex container w-75"
          style={{ backgroundColor: "#FDEEDC" }}
        >
          <form
            className="w-50 mx-auto row"
            // onSubmit={enviarDatos}
          >
            <span class="border border-1"></span>
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

            {/* __________________________Apellido________________________________________ */}

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

            <div class="col-md-6">
              <label
                for="state"
                class="form-label d-flex justify-content-start"
              ></label>
              <select
                id="pais"
                name="pais"
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Selecciona un pais</option>
                <option value="1">Uruguay</option>
                <option value="2">Otro</option>
              </select>
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
            <span class="border border-1"></span>
            {/* ________________________botones______________________________________________ */}
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" class="btn btn-secondary me-3">
                Cancelar
              </button>
              <button type="submit" class="btn btn-secondary">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
