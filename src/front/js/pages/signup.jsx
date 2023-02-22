import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Redirect, Navigate } from "react-router-dom";
import swal from "sweetalert";

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

  async function enviarDatos(e) {
    e.preventDefault();
    let isLoged = await actions.signup(
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
    if (isLoged) {
      actions.login(email, password);
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
    } else {
      swal(
        "Error!",
        "Ese email ya está registrado, recupera tu contraseña si la has olvidado",
        "error"
      );
    }
  }

  return (
    <>
      {store.auth === true ? (
        <Navigate to="/" />
      ) : (
        <div className="container col-lg-6 col-sm-8 align-items-center justify-content-center my-5  border-marron bg-naranja-200 rounded py-5">
          <h2 className="d-flex text-marron justify-content-center">
            Registro de usuario
          </h2>
          <div className="d-flex container w-75">
            <form className="w-100 mx-auto row" onSubmit={enviarDatos}>
              <hr className="border-marron m-0"></hr>
              {/* ______________________Nombre_______________________________________ */}

              <div className="col-md-6">
                <label
                  htmlFor="exampleInputName1"
                  className="form-label"
                ></label>
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

              <div className="col-md-6 pt-3">
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
                  <option value="Uruguay">Uruguay</option>
                  <option value="Otro">Otro</option>
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
              <hr className="border-marron mt-4"></hr>
              {/* ________________________botones______________________________________________ */}
              <div className="d-flex justify-content-center mt-2">
                <button
                  type="submit"
                  className="btn me-3 text-marron bg-naranja-100 border-marron"
                >
                  Cancelar
                </button>
                <button
                  onClick={(e) => enviarDatos(e)}
                  type="submit"
                  className="btn text-marron bg-naranja-100 border-marron"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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

// birth: nacimiento,
// address: direccion,
// city: ciudad,
// postal_code: postal,
// phone_number: telefono,
// birth=request_body["birth"], address=request_body["address"],
//         city=request_body["city"], postal_code=request_body["postal_code"], phone_number=request_body["phone_number"])
