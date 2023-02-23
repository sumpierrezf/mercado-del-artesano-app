import React from "react";
import PropTypes from "prop-types";

export const Contacto = () => {
  return (
    <>
      <div className="container">
        <h3>Sobre nosotros.</h3>
        <p>Hola! Queremos presentarnos!</p>
        <p>
          Somos un equipo conformado por cuatro personas: Luciana, Camila, Luis
          y Virginia. Todos hemos cursado juntos la carrera de Full Stack
          Developer en 4Geeks Academy, y éste es nuestro proyecto final para el
          cual trabajamos con mucha dedicación durante tres semanas. Este tiempo
          ha sido de muchos aprendizajes, de mucho trabajo en equipo, de
          compartir ideas, de muchos errores que pudimos solucionar siempre con
          el incondicional apoyo y guía de nuestros profesores: Rossini, Astrid,
          Laura, Diego y Cecilia; con quienes estaremos agradecidos siempre.
        </p>
        <p>
          Ha sido un gran tiempo de trabajo en equipo del cual nos llevamos un
          montón de amigos además de los conocimientos adquiridos.
        </p>
      </div>
    </>
  );
};
Contacto.propTypes = {
  match: PropTypes.object,
};
