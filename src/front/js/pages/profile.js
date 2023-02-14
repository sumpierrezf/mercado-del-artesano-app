import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Profile = () => {
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

  useEffect(() => {
    actions.getUserInfo(store.user_id);
    // setNombre(store.user_info.first_name);
  }, []);

  function enviarDatos(e) {
    e.preventDefault();
    actions.editProfile(
      store.user_id,
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
  }
  //   console.log(store.user_info.first_name);

  return (
    <>
      {store.auth === false ? (
        <Navigate to="/" />
      ) : (
        <div className="bg-naranja-200 border-marron w-50 mx-auto my-5 p-4 rounded">
          <h2 className="d-flex justify-content-center text-marron">Perfil</h2>
          <form className="w-100 mx-auto row" onSubmit={enviarDatos}>
            <span className="opacity-75 border-marron"></span>
            {/* ______________________Nombre_______________________________________ */}

            <div className="col-md-6">
              <label htmlFor="exampleInputName1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Nombre"
                updatable="true"
                // value={store.user_info.first_name}
                // value={nombre}
                value={nombre || store.user_info.first_name || ""}
                onChange={(e) => setNombre(e.target.value)}
                // onClick={() => this.setSelectionRange(0, this.value.length)}
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
                value={apellido || store.user_info.last_name || ""}
                onChange={(e) => setApellido(e.target.value)}
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
                value={password || store.user_info.password || ""}
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
                value={nacimiento || store.user_info.birth || ""}
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
                value={direccion || store.user_info.address || ""}
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
                value={pais || store.user_info.country || ""}
                onChange={(e) => setPais(e.target.value)}
              >
                <option value>País</option>
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
                value={ciudad || store.user_info.city || ""}
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
                value={postal || store.user_info.postal_code || ""}
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
                value={telefono || store.user_info.phone_number || ""}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <span className="opacity-75 border-marron my-4"></span>
            {/* ________________________botones______________________________________________ */}
            <div className="d-flex justify-content-center">
              <button
                onClick={(e) => enviarDatos(e)}
                type="submit"
                className="btn btn-secondary bg-naranja-100 border-marron text-marron"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};