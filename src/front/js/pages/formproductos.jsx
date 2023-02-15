import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
// Importar la clase Cloudinary.
// import { Cloudinary } from " @cloudinary/url-gen ";

export const Productos = (props) => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [user_id, setUserid] = useState("");
  const [condicion, setCondicion] = useState("");

  const { store, actions } = useContext(Context);

  async function enviarForm(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("file", imageUrl);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dwxvlozfr");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwxvlozfr/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const cloudinaryData = await res.json();
      const imageUrl = cloudinaryData.secure_url;
      console.log(
        nombre,
        categoria,
        precio,
        stock,
        descripcion,
        condicion,
        imageUrl
        // store.user_id
      );
      actions.enviarForm(
        nombre,
        categoria,
        precio,
        stock,
        descripcion,
        condicion,
        imageUrl,
        "",
        "",
        "",
        // 1
        store.user_id
      );
    } catch (err) {
      console.error(err);
    }
  }

  // dwxvlozfr - cloudname
  // upload - ml_default

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
          className="d-flex container w-75"
          style={{ backgroundColor: "#FDEEDC" }}
        >
          <form className="w-50 mx-auto row" onSubmit={enviarForm}>
            <span className="border border-1"></span>
            {/* ______________________Nombre_______________________________________ */}

            <div className="col-md-6">
              <label htmlFor="exampleInputName1" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Nombre del producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* __________________________Categoria________________________________________ */}

            <div className="col-md-6">
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
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
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
                id="exampleInputPrecio1"
                aria-describedby="precioHelp"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
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
                value={stock}
                onChange={(e) => setStock(e.target.value)}
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
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            {/* ___________________________Condicion__________________________________________ */}

            <div className="col-md-12">
              <label
                htmlFor="state"
                className="form-label d-flex justify-content-start"
              ></label>
              <select
                id="pais"
                name="pais"
                className="form-select"
                aria-label="Default select example"
              >
                <option value>Selecciona en que estado se encuentra</option>
                <option value="1">Nuevo</option>
                <option value="2">Poco uso</option>
                <option value="2">Usado</option>
                <option value="2">Con detalles</option>
              </select>
            </div>
            {/* -----------------boton imagen------------------------- */}

            <div
              className="d-flex  mt-4"
              type="POST"
              encType="multipart/formdata"
            >
              {" "}
            </div>
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="file"
              name="Subir imagen "
              style={{
                backgroundColor: "#FFD8A9",
                color: "#E38B29",
              }}
            />
            <input
              onChange={(e) => setImageUrl(e.target.value)}
              type="submit"
              className="subir-imagen"
              style={{
                backgroundColor: "#FFD8A9",
                color: "#E38B29",
              }}
            />
          </form>
        </div>

        {/* ________________________botones______________________________________________ */}
        <div className="d-flex justify-content-center mt-4">
          <button
            type="submit"
            className="btn btn-warning me-3"
            style={{
              backgroundColor: "#FFD8A9",
              color: "#E38B29",
            }}
          >
            Cancelar
          </button>
          <button
            onClick={(e) => enviarForm(e)}
            type="file"
            className="btn btn-warning"
            style={{
              backgroundColor: "#FFD8A9",
              color: "#E38B29",
            }}
          >
            Publicar
          </button>
        </div>

        <div className="d-flex  mt-4"></div>
      </div>
    </>
  );
};
