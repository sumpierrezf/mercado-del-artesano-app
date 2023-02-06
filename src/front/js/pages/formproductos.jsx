import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";

export const Productos = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const [username, setUsername] = useState("");
  //   const { store, actions } = useContext(Context);

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
          style={{
            color: "#E89A5A",
          }}
        >
          Publica tu producto
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
                placeholder="Nombre del producto"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* __________________________Categoria________________________________________ */}

            <div class="col-md-6">
              <label
                htmlFor="exampleInputCategoria1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputCategoria1"
                aria-describedby="categoriaHelp"
                placeholder="Categoria"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* ________________________Precio______________________________________________ */}
            <div className="col-md-6">
              <label
                htmlFor="exampleInputPrecio1"
                className="form-label"
              ></label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPrecoi1"
                aria-describedby="precioHelp"
                placeholder="Precio"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* _________________________Stock___________________________________________ */}
            <div className="col-md-6">
              <label
                htmlFor="exampleInputStockd1"
                className="form-label"
              ></label>
              <input
                type="number"
                className="form-control"
                id="exampleInputStock1"
                placeholder="Stock"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* ________________________Descripcion del producto_____________________________________ */}
            <div className="mb-3 container">
              <label
                htmlFor="exampleInputDescripcion1"
                className="form-label"
              ></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputDescripcion1"
                aria-describedby="descripcionHelp"
                placeholder="Descripcion del producto"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* ___________________________Condicion__________________________________________ */}

            <div class="col-md-12">
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
                <option selected>Selecciona en que estado se encuentra</option>
                <option value="1">Nuevo</option>
                <option value="2">Poco uso</option>
                <option value="2">Usado</option>
                <option value="2">Con detalles</option>
              </select>
            </div>
            {/* -----------------boton imagen------------------------- */}

            <div className="d-flex  mt-4">
              <button
                type="submit"
                class="btn btn-warning me-3"
                style={{
                  backgroundColor: "#FFD8A9",
                  color: "#E38B29",
                }}
              >
                Subir imagen
                <i class="fas fa-cloud-download-alt ms-2"></i>
              </button>
            </div>

            {/* ________________________botones______________________________________________ */}
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                class="btn btn-warning me-3"
                style={{
                  backgroundColor: "#FFD8A9",
                  color: "#E38B29",
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                class="btn btn-warning"
                style={{
                  backgroundColor: "#FFD8A9",
                  color: "#E38B29",
                }}
              >
                Publicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
