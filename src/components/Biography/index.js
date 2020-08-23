import React from "react";
import "./style.scss";
import bioPic from "../../assets/images/bio-picture.jpg";

function Biography() {
  return (
    <>
      <h4 className="title">Biografía</h4>
      <div className="bio-wrapper">
        <div>
          <img className="bio-img" src={bioPic} />
        </div>
        <div>
          <p className="bio-text">
            Mi nombre es María y soy una fotógrafa y realizadora audiovisual
            argentina nacida en el año 1989. Estudié Diseño de Imagen y Sonido
            en la Facultad de Arquitectura de la Universidad de Buenos Aires, y
            luego Fotoperiodismo en Argra Escuela. Realicé diferentes cursos de
            fotografía, tanto de moda editorial como de fotografía documental y
            periodística entre 2012 y 2015. Comencé a fotografiar de manera
            profesional en el año 2011, y como fotógrafa de prensa desde el
            2013. Fui corresponsal del diario español La Razón entre 2013 y
            2015, y colaboradora de la agencia Newzulu y la revista Nuevos
            Bancos y Seguros, y coordiné el área audiovisual del Instituto de
            Vivienda de la Ciudad de Buenos Aires.
          </p>
          <p className="bio-text">
            Actualmente me desempeño como realizadora audiovisual en el Gobierno
            de la Ciudad de Buenos Aires.
          </p>
          <p className="bio-text">
            Como docente trabajé junto al fotógrafo Martín Acosta, amigo y
            mentor, dando clases de diseño audiovisual en uno de sus talleres de
            fotografía documental.
          </p>
        </div>
      </div>
    </>
  );
}

export default Biography;
