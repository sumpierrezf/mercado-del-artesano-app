import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer bg-naranja-300 shadow-lg mt-auto py-3 text-center text-light w-100 h-auto d-flex">
    <div className="col-6 d-flex align-items-center">
      <p className="my-auto mx-auto px-1 text-shadow">
        Hecho con 🧡 por{" "}
        <a className="text-marron" href="http://www.mercadodelartesano.com">
          Mercado del Artesano
        </a>
      </p>
    </div>
    <div className="col-6 py-auto fs-4 text-shadow">
      <i className="fab fa-facebook mx-2"></i>
      <i className="fab fa-twitter mx-2"></i>
      <i className="fab fa-instagram mx-2"></i>
      <i className="fab fa-github mx-2"></i>
    </div>
  </footer>
);
