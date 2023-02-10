import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logo3 from "../../img/logo3.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  function handleLogout() {
    actions.logout(); //cerrar la sesion
    navigate("/login"); //usamos navigate para redireccionar
  }
  function handleLogin() {
    navigate("/login"); //usamos navigate para redireccionar
  }
  function handleSignup() {
    navigate("/signup"); //usamos navigate para redireccionar
  }
  function handleFavs() {
    navigate("/favs/1"); //usamos navigate para redireccionar
  }
  function handleCart() {
    navigate("/cart/1"); //usamos navigate para redireccionar
  }
  function handleForm() {
    navigate("/form"); //usamos navigate para redireccionar
  }

  function filteredProducts(event) {
    event.preventDefault();
    fetch(
      "https://3001-sumpierrezf-mercadodela-zm7bvmnma0m.ws-us86.gitpod.io/api/products"
    )
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(filteredProducts);
        setProducts(filteredProducts);
      });
  }

  return (
    <nav className="bg-naranja-200 border-naranja-400 navbar-light ">
      <div>
        {products.map((product, index) => (
          <p key={index}>{product.name}</p>
        ))}
      </div>
      <div className="container-fluid d-flex">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img className="logo" src={logo3} width="200" height="80" />
          </span>
        </Link>
        <div className="d-flex w-100 justify-center">
          <form onSubmit={filteredProducts}>
            <button type="submit">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    filteredProducts(event);
                  }
                }}
              />
              Buscar
            </button>
          </form>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-end">
        {store.auth === true ? (
          <>
            <div className="float-end dropdown my-auto">
              <button
                className="btn bg-naranja-100 text-marron border-marron dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Opciones
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={handleFavs}>
                    Favoritos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleForm}>
                    Vender
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={handleLogout}>
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="btn bg-naranja-100 text-marron border-marron mx-2 my-auto border-2"
              onClick={handleCart}
            >
              <i className="fa fa-cart-arrow-down"></i>
            </button>
          </>
        ) : (
          <>
            <button
              className="btn bg-naranja-100 text-marron my-auto border-marron me-2 border-2 justify-content-end"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
            <button
              className="btn bg-naranja-100 text-marron border-marron my-auto me-2 border-2 justify-content-end"
              onClick={handleSignup}
            >
              Crear usuario
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
