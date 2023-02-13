import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Favs } from "./pages/favs";
import { Productos } from "./pages/formproductos.jsx";
import injectContext from "./store/appContext";
import { Login } from "./pages/login.jsx";
import { SignUp } from "./pages/signup.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Cart } from "./pages/cart";
import { DetalleProducto } from "./pages/detalleProducto";
import { ResetPassword } from "./pages/resetPassword.jsx";

// create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Demo />} path="/demo" />
          <Route element={<SignUp />} path="/signup" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<Favs />} path="/favs/:theid" />
          <Route element={<Productos />} path="/form" />
          <Route element={<DetalleProducto />} path="/detalleProducto/:theid" />
          <Route element={<ResetPassword />} path="/resetPassword" />
          <Route element={<Login />} path="/login" />
          <Route element={<Cart />} path="/cart/:theid" />
          <Route element={<h1> Not found! </h1>} />{" "}
        </Routes>{" "}
        <Footer />{" "}
      </ScrollToTop>{" "}
    </BrowserRouter>
  );
};

export default injectContext(Layout);
