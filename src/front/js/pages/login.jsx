import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";

const Login = () => {
  // const [switchShown, setSwitchShown] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  function enviarDatos(e) {
    e.preventDefault();
    actions.login(email, password);
    setEmail("");
    setPassword("");

    console.log(email, password);
    // fetch(
    //   "https://3001-sumpierrezf-mercadodela-nb1kqfi98gb.ws-us85.gitpod.io/api/login",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email: email, password: password }),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form className="login pt-5" onSubmit={enviarDatos}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="input-password mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              value={password}
              className="form-control"
              id="exampleInputPassword"
            />
            {/* <i
              className={`far fa-eye${switchShown == true ? "" : "-slash"} `}
              onClick={() =>
                switchShown == true
                  ? setSwitchShown(false)
                  : setSwitchShown(true)
              }
              id="togglePassword"
            ></i> */}
          </div>

          <div className="mb-3 resetpassword">
            <Link to="/passrecover">Olvidé mi contraseña</Link>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="boton-login btn text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
