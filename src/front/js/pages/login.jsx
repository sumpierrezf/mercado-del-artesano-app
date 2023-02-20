import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [switchShown, setSwitchShown] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);

  function sendData(e) {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <div
        className="container d-flex col-lg-6 col-sm-8 align-items-center justify-content-center my-5  border-marron bg-naranja-200 rounded"
        style={{ height: "auto" }}
      >
        <div className="d-flex justify-content-center w-75">
          {/* direccioné a la vista demo pero luego que tengamos la vista del catálogo debemos en caso de que el login sea validado direccionarlo a la vista correspondiente  */}
          {store.auth === true ? (
            <Navigate to="/" />
          ) : (
            <form className="login pt-3 w-100 pb-3" onSubmit={sendData}>
              <div className="mb-3">
                <h2 className="text-center mb-2">Login</h2>
                <hr className="border-marron" />
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label text-marron"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                  className="form-control border-marron"
                  id="exampleInputEmail1"
                  value={email}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="input-password mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label text-marron"
                >
                  Contraseña
                </label>
                <input
                  type={`${switchShown == true ? "password" : "text"}`}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Contraseña"
                  value={password}
                  className="form-control border-marron"
                  id="exampleInputPassword"
                />
                <i
                  className={`far fa-eye${
                    switchShown == true ? "" : "-slash"
                  } `}
                  onClick={() =>
                    switchShown == true
                      ? setSwitchShown(false)
                      : setSwitchShown(true)
                  }
                  id="togglePassword"
                ></i>
              </div>

              <div className="mb-3 resetpassword">
                <Link className="text-naranja-400" to="/resetPassword">
                  Olvidé mi contraseña
                </Link>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="boton-login bg-naranja-400 btn text-white fw-bold mt-4 p-3 align-items-center rounded-pill w-50 text-uppercase"
                >
                  Login
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
