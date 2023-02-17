import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo6 from "../../img/logo6.png";
import { Catalogo } from "./catalogo";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleImput = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "") {
      actions.obtenerInfoProductos();
    } else {
      actions.filterProducts(e.target.value);
    }
    // actions.filterProducts(searchTerm);
  };

  // console.log(searchTerm);
  useEffect(() => {
    actions.getUserInfo(store.user_id);
  }, []);

  function handleLogout() {
    actions.logout(); //cerrar la sesion
    navigate("/login"); //usamos navigate para redireccionar
  }

  return (
    <nav className="bg-naranja-200 border-marron-bot navbar-light">
      <div className="container-fluid d-flex">
        <Link className="justify-content-center" to="/">
          <span className="navbar-brand mb-0 h1 mx-5">
            <img className="logo" src={logo6} width="90" height="90" />
          </span>
          {/* <h5 className="text-marron w-75">Mercado del artesano</h5> */}
        </Link>
        <div className="d-flex w-100 justify-content-center my-auto mx-auto w-100">
          <form className="form-inline w-75">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              value={searchTerm}
              onChange={handleImput}
            />
          </form>
        </div>

        {/* ----------------Opciones------------------------- */}
        <div className="d-flex w-50 justify-content-end me-5">
          {store.auth === true ? (
            <>
              <div className="float-end dropdown my-auto">
                <button
                  className="btn text-marron dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {store.user_id != null &&
                  store.user_info.profile_picture != null ? (
                    <img
                      className="rounded-circle border-marron me-2 px-0"
                      src={store.user_info.profile_picture}
                      alt=""
                      width={"25"}
                      height={"25"}
                    />
                  ) : (
                    <img
                      className="rounded-circle border-marron me-2 px-0"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                      alt=""
                      width={"25"}
                      height={"25"}
                    />
                  )}
                  Opciones
                </button>
                <ul className="dropdown-menu">
                  {/* -------- -------Favoritos----------------------- */}
                  <li>
                    <Link to="/favs" className="dropdown-item" href="#">
                      Favoritos
                    </Link>
                  </li>
                  {/* ----------------vender--------- */}
                  <li>
                    <Link to="/form" className="dropdown-item" href="#">
                      Vender
                    </Link>
                  </li>
                  {/* ----------perfil-------------- */}
                  <li>
                    <Link to="/profile" className="dropdown-item" href="#">
                      Perfil
                    </Link>
                  </li>
                  {/* ----------cerrar sesion-------------- */}
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </a>
                  </li>
                </ul>
              </div>

              <Link
                className="btn text-marron mx-2 my-auto border-2"
                to="/cart"
              >
                <i className="fa fa-cart-arrow-down"></i>
              </Link>
            </>
          ) : (
            <>
              {/* --------------- iniciar sesion -------------- */}
              <Link
                className="btn text-marron my-auto me-2 border-2 justify-content-end"
                to="/login"
              >
                Iniciar sesión
              </Link>
              {/* --------------- signup -------------- */}
              <Link
                className="btn text-marron my-auto me-2 border-2 justify-content-end"
                to="/signup"
              >
                Crear usuario
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
