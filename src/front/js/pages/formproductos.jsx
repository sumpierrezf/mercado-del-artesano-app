import React, { useState, useContext, useRef, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";
// Importar la clase Cloudinary.
// import { Cloudinary } from " @cloudinary/url-gen ";

export const Productos = (props) => {
  const inputRef = useRef(null);
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // const [img1, setImg1] = useState("");
  const [user_id, setUserid] = useState("");
  const [condicion, setCondicion] = useState("");
  const [loading, setLoading] = useState(false);
  const { store, actions } = useContext(Context);
  const [image, setImage] = useState("");
  const [urls, setUrls] = useState([]);

  async function enviarForm(e) {
    e.preventDefault();
    console.log(
      setNombre(""),
      setCategoria(""),
      setPrecio(""),
      setStock(""),
      setDescripcion(""),
      setCondicion(""),
      setUrls(""),
      setImage("")
      // store.user_id
    );
    await actions.createProduct(
      nombre,
      categoria,
      precio,
      stock,
      descripcion,
      condicion,
      urls,
      localStorage.user_id
    );
  }

  const resetFileInput = () => {
    inputRef.current.value = null;
  };
  // catch (err) {
  //   console.error(err);
  // }

  // dwxvlozfr - cloudname
  // upload - ml_default
  const submitImage = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    try {
      const imagenes = Object.values(files);
      console.log(files);

      console.log(imagenes);
      const response = await Promise.all(
        imagenes.map((item) => {
          data.append("file", item);
          data.append("upload_preset", "pdnsjg41");
          return fetch(
            "https://api.cloudinary.com/v1_1/dlesv1phq/image/upload",
            {
              method: "POST",
              body: data,
            }
          ).then((respons) => respons.json());
        })
      );
      console.log(files);
      const uploadUrls = response.map((res) => res.secure_url);
      setUrls(uploadUrls);
    } catch (error) {
      console.log(error);
    }

    // for (let i = 0; i < files.length; i++) {
    //   data.append("file", files[i]);
    //   data.append("upload_preset", "pdnsjg41");
    //   data.append("cloud_name", "dlesv1phq");
    //   const res = await fetch(
    //     "https://api.cloudinary.com/v1_1/dlesv1phq/image/upload",
    //     {
    //       method: "POST",
    //       body: data,
    //     }
    //   );
    //   const file = await res.json();
    //   console.log(file.secure_url);
    //   imagenes.concat(file.secure_url);
    //   // setUrl(file.secure_url);
    // }
    // setUrls(imagenes);
    // console.log(imagenes);
  };
  const handleChange = (event) => {
    setCondicion(event.target.value);
  };
  const handleCategoria = (event) => {
    setCategoria(event.target.value);
  };
  // console.log(urls);
  useEffect(() => {
    actions.getUserProductsInCart(localStorage.user_id);
  }, []);

  return (
    <>
      {localStorage.user_id === null ? (
        <Navigate to="/" />
      ) : (
        <div className="container col-lg-6 col-sm-8 align-items-center justify-content-center my-5  border-marron bg-naranja-200 rounded py-4">
          <h2 className="d-flex justify-content-center">Publica tu producto</h2>

          <div className="container w-75">
            <form className="mx-auto row" onSubmit={enviarForm}>
              <hr className="border-marron mt-4"></hr>
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
                <select
                  id="categoria"
                  name="categoria"
                  className="form-select"
                  aria-label="Default select example"
                  value={categoria}
                  onChange={handleCategoria}
                >
                  <option value>Categoría</option>
                  <option value="Tazas">Tazas</option>
                  <option value="Gorros">Gorros</option>
                  <option value="Madera">Madera</option>
                  <option value="Tejidos">Tejidos</option>
                  <option value="Pinturas">Pinturas</option>
                </select>
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
                  value={condicion}
                  onChange={handleChange}
                >
                  <option value>Selecciona en que estado se encuentra</option>
                  <option value="nuevo">Nuevo</option>
                  <option value="poco uso">Poco uso</option>
                  <option value="usado">Usado</option>
                  <option value="con detalles">Con detalles</option>
                </select>
              </div>
              {/* -----------------boton imagen------------------------- */}

              <div
                className="d-flex  mt-4"
                type="POST"
                encType="multipart/formdata"
              >
                <input
                  onChange={(e) => {
                    setImage(e.target.files);
                    submitImage(e);
                  }}
                  ref={inputRef}
                  type="file"
                  name="Subir imagen "
                  multiple
                  className="btn text-marron bg-naranja-100 w-100 border-marron"
                />
              </div>
              {/* <input
              onChange={(e) => setImageUrl(e.target.value)}
              type="submit"
              className="subir-imagen"
              style={{
                backgroundColor: "#FFD8A9",
                color: "#E38B29",
              }}
            /> */}
              {/* ________________________botones______________________________________________ */}
              <div className="d-flex justify-content-center mt-4">
                <button
                  type="submit"
                  className="btn me-3 text-marron bg-naranja-100 border-marron"
                >
                  Cancelar
                </button>
                <button
                  onClick={resetFileInput}
                  type="submit"
                  className="btn text-marron bg-naranja-100 border-marron"
                >
                  Publicar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
