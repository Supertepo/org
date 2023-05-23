import { useState } from "react";
import "./Campo.css";

const Campo = (props) => {
  const placeholderModificador = `${props.placeholder}...`;

  //destructuracion
  const {type = "text"} = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        type={type}
        placeholder={placeholderModificador}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campo;
