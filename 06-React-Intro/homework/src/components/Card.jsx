import React from 'react';
import estilo from '../styles/Card.module.css';

export default function Card(props) {
  // prop = min, max, name, img, onClose
  // acá va tu código
  return (
      <div className={estilo.contenedor}>
        <button onClick={props.onClose} className={`${estilo.boton} ${estilo.botonColor}`}>X</button>
        <h4>{props.name}</h4>
        <div className={estilo.info}>
          <p>Min:</p>
          <p>{props.min}</p>
          <p>Max:</p>
          <p>{props.max}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" className={estilo.imagen}/>
      </div>
  )


};