import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../../styles/index.css";

const Login = () => {
  const [switchShown, setSwitchShown] = useState(true);
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <div className="h-100 d-flex align-items-center">
        <div
          className="container d-flex col-lg-6 col-sm-8 align-items-center justify-content-center my-5  border-marron bg-naranja-200 rounded py-4"
          style={{ height: "auto" }}
        >
          <div className="d-flex justify-content-center w-75">
            {localStorage.user_id != null ? (
              <Navigate to="/" />
            ) : (
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(valores) => {
                  let errores = {};
                  //Validacion para el correo
                  if (!valores.email) {
                    errores.email = "Por favor ingresa un correo electronico";
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      valores.email
                    )
                  ) {
                    errores.email = "Por favor ingrese un formato válido";
                  }
                  //Validacion para la contraseña
                  if (!valores.password) {
                    errores.password = "Por favor ingresa una contraseña";
                  } else if (
                    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
                      valores.password
                    )
                  ) {
                    errores.password =
                      "La contraseña debe contener por lo menos una letra mayúscula, un número, un caracter especial y un mínimo de 8 dígitos";
                  }
                  return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                  resetForm();
                  console.log("Formulario enviado");
                  console.log(localStorage.getItem("user_id"));
                  actions.login(valores.email, valores.password);
                  cambiarFormularioEnviado(true);
                  setTimeout(() => cambiarFormularioEnviado(false), 5000);
                  // navigate("/");
                }}
              >
                {({ errors }) => (
                  <Form className="login pt-3 w-100 pb-3">
                    {console.log(errors)}
                    <div className="mb-3">
                      <h2 className="text-center mb-2">Login</h2>
                      <hr className="border-marron" />
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label text-marron"
                      >
                        Email
                      </label>
                      <Field
                        //   onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@correo.com"
                        type="email"
                        name="email"
                        className="form-control border-marron"
                        id="exampleInputEmail1"
                        //   value={email}
                        aria-describedby="emailHelp"
                      />
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <div className="error">{errors.email}</div>
                        )}
                      />
                    </div>
                    <br />
                    <div className="input-password mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label text-marron"
                      >
                        Contraseña
                      </label>
                      <Field
                        type={`${switchShown === true ? "password" : "text"}`}
                        placeholder="********"
                        //   value={password}
                        name="password"
                        className="form-control border-marron"
                        id="exampleInputPassword"
                      />
                      <i
                        className={`far fa-eye${
                          switchShown === true ? "" : "-slash"
                        } `}
                        onClick={() =>
                          switchShown === true
                            ? setSwitchShown(false)
                            : setSwitchShown(true)
                        }
                        id="togglePassword"
                      ></i>
                      <ErrorMessage
                        name="password"
                        component={() => (
                          <div className="error">{errors.password}</div>
                        )}
                      />
                    </div>
                    <br />
                    <div className="mb-3 resetpassword">
                      <Link className="text-naranja-400" to={"/resetPassword"}>
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

                      {/* {formularioEnviado && (
                      <div className="alert alert-success mt-3">
                        Gracias por conectarte con nosotros!
                      </div>
                    )} */}
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
