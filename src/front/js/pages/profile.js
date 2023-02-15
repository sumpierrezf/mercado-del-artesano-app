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

  const [switchShown, setSwitchShown] = useState(true);

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUserInfo(store.user_id);
  }, [store.user_info]);

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
      telefono,
      store.url
    );
  }

  return (
    <>
      {store.auth === false ? (
        <Navigate to="/" />
      ) : (
        <div className="bg-naranja-200 border-marron w-50 mx-auto my-5 p-4 rounded">
          <h2 className="d-flex justify-content-center text-marron">Perfil</h2>
          <form className="w-100 mx-auto row" onSubmit={enviarDatos}>
            <span className="opacity-75 border-marron"></span>
            {/* <!-- Button trigger modal --> */}
            <div className="w-50 mx-auto row">
              <img
                className="rounded-circle my-3 border-marron px-0"
                src={
                  store.user_info.profile_picture ||
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                }
                alt=""
                width={"160px"}
                height={"auto"}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content bg-naranja-100 border-marron">
                  <div className="modal-header border-marron">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Cambiar foto de perfil
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body border-marron">
                    <div className="mb-3 d-flex">
                      <img
                        className="rounded-circle mx-auto my-2 px-0 border-marron"
                        src={
                          store.url ||
                          store.user_info.profile_picture ||
                          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                        }
                        alt=""
                        width={"200px"}
                        height={"auto"}
                      />
                    </div>
                    <input
                      className="btn bg-naranja-200 border-marron text-marron"
                      type="file"
                      placeholder="Subir imágen"
                      onChange={(e) => {
                        store.image = e.target.files[0];
                      }}
                    />
                  </div>
                  <div className="modal-footer border-marron">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      className="btn bg-naranja-200 border-marron text-marron"
                      onClick={() => {
                        actions.uploadImage();
                        alert(
                          "Debes darle a guardar en el fondo del formulario para actualizar tu foto"
                        );
                      }}
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal end --> */}
            <span className="opacity-75 border-marron"></span>
            {/* ______________________Nombre_______________________________________ */}

            <div className="col-md-6 mt-2">
              <label htmlFor="exampleInputName1" className="form-label">
                Nombre
              </label>
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
              <label htmlFor="exampleInputApellido1" className="form-label">
                Apellido
              </label>
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
            <div className="container">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Contraseña
              </label>
              <input
                type={`${switchShown == true ? "password" : "text"}`}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
                value={password || store.user_info.password || ""}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`far fa-eye${switchShown == true ? "" : "-slash"} `}
                onClick={() =>
                  switchShown == true
                    ? setSwitchShown(false)
                    : setSwitchShown(true)
                }
                id="togglePassword"
              ></i>
            </div>

            {/* _________________________Fecha de nacimiento_____________________________________ */}
            <div className="mb-3 container">
              <label htmlFor="exampleInputFecha1" className="form-label">
                Fecha de Nacimiento
              </label>
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
              <label htmlFor="exampleInputDireccion1" className="form-label">
                Dirección
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputDireccionl1"
                aria-describedby="direccionHelp"
                placeholder="Dirección"
                value={direccion || store.user_info.address || ""}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>

            {/* ____________________________pais__________________________________________ */}

            <div className="col-md-6">
              <label
                htmlFor="state"
                className="form-label d-flex justify-content-start"
              >
                País
              </label>
              <select
                id="pais"
                name="pais"
                className="form-select"
                aria-label="Default select example"
                value={pais || store.user_info.country || ""}
                onChange={(e) => setPais(e.target.value)}
              >
                <option value>Seleccionar país</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            {/* _____________________Ciudad___________________________________________ */}
            <div className="col-md-6">
              <label htmlFor="exampleInputCiudad1" className="form-label">
                Ciudad
              </label>
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
              <label htmlFor="exampleInputCodigo1" className="form-label">
                Codigo Postal
              </label>
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
              <label htmlFor="exampleInputTelefono1" className="form-label">
                Telefono
              </label>
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
                className="btn bg-naranja-100 border-marron text-marron"
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
