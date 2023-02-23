import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Contacto = () => {
  return (
    <>
      <div className="mt-4">
        <div className="bg-naranja-300 p-5 mb-4">
          <h3 className="text-shadow">Sobre nosotros</h3>
          <p>
            <strong>¡Hola! ¡Queremos presentarnos!</strong>
          </p>
          <p>
            Somos un equipo conformado por cuatro personas:{" "}
            <strong>Luciana, Camila, Luis y Virginia</strong>. Todos hemos
            cursado juntos la carrera de Full Stack Developer en{" "}
            <strong>4Geeks Academy</strong>, y éste es nuestro proyecto final
            para el cual trabajamos con mucha dedicación durante tres semanas.
            Este tiempo ha sido de muchos aprendizajes, de mucho trabajo en
            equipo, de compartir ideas, de muchos errores que pudimos solucionar
            siempre con el incondicional apoyo y guía de nuestros profesores:
            Rossini, Astrid, Laura, Diego y Cecilia; con quienes estaremos
            agradecidos siempre.
          </p>
          <p>
            Ha sido un gran tiempo de trabajo en equipo del cual nos llevamos un
            montón de amigos además de los conocimientos adquiridos.
          </p>
        </div>
        <div className="bg-naranja-200 p-5">
          <h3 className="text-shadow">Sobre el proyecto</h3>
          <p>
            <strong>Mercado del Artesano</strong> es una aplicación para que los
            artesanos de Uruguay puedan vender sus artesanías, todos en un mismo
            lugar.
          </p>
          <p>
            La idea surge con la intención de facilitar el proceso de compra y
            venta de este tipo de productos. En la actualidad existen diversas
            plataformas que se utilizan para este fin, entre ellas las redes
            sociales, pero desde nuestro punto de vista sería mejor para todos
            si existe un lugar especial para la venta de artesanías.
          </p>
          <p>
            Nuestra idea es que al reunir en un solo lugar a todos los
            vendedores, y a todos los posibles compradores, le será más fácil al
            artesano acceder a mayor cantidad de público porque los potenciales
            clientes también se verían beneficiados de encontrar todo en un
            mismo lugar. Esto lo que hace es que los compradores se registren
            para no tener que recorrer infinidad de plataformas buscando un
            artículo, comparando los precios, la calidad de los materiales, el
            diseño, las recomendaciones, e incluso podrían elegir sus compras
            por la ubicación en la que se encuentren, comprándole a los
            artesanos de su ciudad. Al tener esta facilidad muchas personas se
            interesarían por utilizar nuestra aplicación, aumentando el número
            de clientes a los que podrían acceder los vendedores, resultando en
            un beneficio para ambas partes.
          </p>
          <p>
            <strong>
              Mercado del Artesano aspira a ser ese lugar que le facilite el
              proceso de compra y venta de artesanías tanto al cliente como al
              vendedor.
            </strong>
          </p>
        </div>
        <div className="bg-naranja-100 p-5">
          <h3 className="text-shadow">Contacto</h3>
          <p>
            Nuestra info de contacto para quienes deseen comunicarse con
            nosotros:
          </p>
          <div className="row mt-2">
            <div className="col-lg-3 col-sm-6 text-center">
              <h6 className="text-shadow">
                <strong>Luciana Marín Pérez</strong>
              </h6>
              <p>
                <button type="button" className="btn btn-link">
                  <a
                    href="https://www.linkedin.com/in/luciana-marin-fullstackdeveloper/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
                <button type="button" className="btn btn-link">
                  <a href="https://github.com/lumarin2802" target="_blank">
                    <i className="fab fa-github fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
              <h6 className="text-shadow">
                <strong>Camila Burgueño</strong>
              </h6>
              <p>
                <button type="button" className="btn btn-link">
                  <a
                    href="https://www.linkedin.com/in/camila-nayelli-burgue%C3%B1o-ense%C3%B1at-7b0850251/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
                <button type="button" className="btn btn-link">
                  <a href="https://github.com/CamilaBur" target="_blank">
                    <i className="fab fa-github fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
              <h6 className="text-shadow">
                <strong>Luis Píriz</strong>
              </h6>
              <p>
                <button type="button" className="btn btn-link">
                  <a
                    href="https://www.linkedin.com/in/luis-piriz/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
                <button type="button" className="btn btn-link">
                  <a href="https://github.com/LuisPiriz" target="_blank">
                    <i className="fab fa-github fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
              </p>
            </div>
            <div className="col-lg-3 col-sm-6 text-center">
              <h6 className="text-shadow">
                <strong>Virginia Umpiérrez</strong>
              </h6>
              <p>
                <button type="button" className="btn btn-link">
                  <a
                    href="https://www.linkedin.com/in/shirley-virginia-umpierrez-sumpierrezf/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
                <button type="button" className="btn btn-link">
                  <a href="https://github.com/sumpierrezf" target="_blank">
                    <i className="fab fa-github fs-4 text-shadow text-warning"></i>
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Contacto.propTypes = {
  match: PropTypes.object,
};
