import React, { useState, useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [resetearPassword, setResetearPassword] = useState("");
  let navegation = useNavigate();
  const { store, actions } = useContext(Context);
  const sendEmail = async (e) => {
    e.preventDefault();
    actions.changePassword(resetearPassword);

    let correo = resetearPassword;
    console.log(correo);
    if (sendEmail) {
      navegation("/");
    } else {
      null;
    }
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertir esta situación!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, quiero resetear la contraseña!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Resetear!",
          "Tu contraseña será reseteada, recibirás un correo electrónico.",
          "success"
        );
      }
    });
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
          Email
        </label>

        <input
          onChange={(e) => setResetearPassword(e.target.value)}
          type="email"
          className="form-control border-naranja-400"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={resetearPassword}
          placeholder="name@example.com"
        />
        <div id="emailHelp" className="form-text text-marron">
          Escribe tu email aquí para reestablecer tu contraseña.
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="boton-login bg-naranja-400 btn text-white fw-bold mt-5 p-3 align-items-center"
            onClick={sendEmail}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
