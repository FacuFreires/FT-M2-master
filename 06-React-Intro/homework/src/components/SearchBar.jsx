import React from 'react';
import barra from '../styles/SearchBar.module.css';


export default function SearchBar(props) {
  // acá va tu código
  return (
      <div className={barra.barra}> 
          <input type="text" placeholder = "Ciudad..." className={barra.search}/>
          <button onClick={()=>props.onSearch('Buscando Ciudad')} className={barra.boton}>Agregar</button>
          {/* $.('.button').addEventListener('click'), function(e) {} --> Lo mismo a poner onClick en button -> Quiero definir una funcion*/}
      </div>
      
      )
    };