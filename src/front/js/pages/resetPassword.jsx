import React from "react";
import "../../styles/index.css";

export const ResetPassword = () => {
  return (
    <div className=" card bg-naranja-100 container d-flex align-items-center justify-content-center mt-5 w-25 h-100">
      <form className="pt-5 w-100 pb-5">
        <label for="exampleInputEmail1" className="form-label text-naranja-400">
          Email address
        </label>

        <input
          type="email"
          className="form-control border-naranja-400"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
