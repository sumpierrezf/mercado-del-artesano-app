import React, { useState, useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const ResetPassword = () => {
  const [resetearPassword, setResetearPassword] = useState("");

  const { store, actions } = useContext(Context);
  const sendEmail = async (e) => {
    e.preventDefault();
    actions.changePassword(resetearPassword);

    // actions.resetPassword(email);
    // setEmail("");
  };
  return (
    <div className=" card bg-naranja-100 container d-flex align-items-center justify-content-center mt-5 w-25 h-100">
      <div className="badge bg-naranja-200 text-wrap">
        <p className="fw-bold text-marron fs-4">Reestablecer contraseña</p>
      </div>
      <form className="pt-5 w-100 pb-5" onSubmit={sendEmail}>
        <label
          htmlFor="exampleInputEmail1"
          className="form-label fw-bold text-naranja-400"
        >
          Email address
        </label>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control border-naranja-400"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          placeholder="Email"
        />
        <div id="emailHelp" className="form-text text-marron">
          Escribe tu email aquí para reestablecer tu contraseña.
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="boton-login bg-naranja-400 btn text-white fw-bold mt-5 p-3 align-items-center"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
