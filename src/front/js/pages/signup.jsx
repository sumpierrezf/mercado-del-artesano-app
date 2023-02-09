import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect } from "react-router-dom";

export const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [postal, setPostal] = useState("");
  const [telefono, setTelefono] = useState("");

  const { store, actions } = useContext(Context);

  function enviarDatos(e) {
    e.preventDefault();
    actions.signup(
      email,
      password,
      nombre,
      apellido,
      nacimiento,
      direccion,
      pais,
      ciudad,
      postal,
      telefono
    );
    actions.login(email, password, nombre);
    setEmail("");
    setPassword("");
    setNombre("");
    setApellido("");
    setNacimiento("");
    setDireccion("");
    setPais("");
    setCiudad("");
    setPostal("");
    setTelefono("");
  }

  return (
    <>
      <div style={{ backgroundColor: "#FDEEDC" }}>
        <h2
          className="d-flex justify-content-center"
          style={{ color: "#E89A5A" }}
        >
          Registro de usuario
        </h2>

        <div
          className="d-flex container w-75"
          style={{ backgroundColor: "#FDEEDC" }}
        >
          <form className="w-50 mx-auto row" onSubmit={enviarDatos}>
            <span className="border border-1"></span>
            {/* ______________________Nombre_______________________________________ */}

            <div className="col-md-6">
              <label htmlFor="exampleInputName1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* __________________________Apellido________________________________________ */}

            <div className="col-md-6">
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
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
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
                value={nacimiento}
                onChange={(e) => setNacimiento(e.target.value)}
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
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            {/* ____________________________pais__________________________________________ */}

            <div className="col-md-6">
              <label
                htmlFor="state"
                className="form-label d-flex justify-content-start"
              ></label>
              <select
                id="pais"
                name="pais"
                className="form-select"
                aria-label="Default select example"
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              >
                <option value>Selecciona un pais</option>
                <option value="1">Uruguay</option>
                <option value="2">Otro</option>
              </select>
            </div>
            {/* _____________________Ciudad___________________________________________ */}
            <div className="col-md-6">
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
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
              />
            </div>

            {/* ________________________Codigo Postal______________________________________________ */}

            <div className="col-md-6">
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
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
              />
            </div>

            {/* _______________________Telefono_______________________________________________ */}
            <div className="col-md-6">
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
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <span className="border border-1"></span>
            {/* ________________________botones______________________________________________ */}
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn btn-secondary me-3"
                style={{
                  backgroundColor: "#FFD8A9",
                  color: "#E38B29",
                }}
              >
                Cancelar
              </button>
              <button
                onClick={(e) => enviarDatos(e)}
                type="submit"
                className="btn btn-secondary"
                style={{
                  backgroundColor: "#FFD8A9",
                  color: "#E38B29",
                }}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// const actions = {
//   signup: (
//     userEmail,
//     userPassword,
//     userNombre,
//     userApellido,
//     userNacimiento,
//     userDireccion,
//     userCiudad,
//     userPostal,
//     userTelefono
//   ) => {
//     fetch("", {
//       method: "POST",
//       mode: "no-cors",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify({
//         email: userEmail,
//         password: userPassword,
//         nombre: userNombre,
//         apellido: userApellido,
//         nacimiento: userNacimiento,
//         direccion: userDireccion,
//         ciudad: userCiudad,
//         postal: userPostal,
//         telefono: userTelefono,
//       }), // body data type must match "Content-Type" header
//     }).catch((err) => console.log(err));
//   },
// };
