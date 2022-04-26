import React from 'react';
import Card from './Card';
import estiloCards from '../styles/Cards.module.css';

export default function Cards({cities}) {
  // props = {cities}
  // cities = {[], [], []}
  // acá va tu código
  // tip, podés usar un map
  if(!cities) { // ! = si no me pasaste props.cities
    return <h1>No hay ciudades disponibles</h1>
  } 
  return (
      <div className={estiloCards.cards}>
        {
          cities && cities.map(city => (
            <Card 
            key={city.id}
            max={city.main.temp_max}
            min={city.main.temp_min}
            name={city.name}
            img={city.weather[0].icon}
            onClose={() => alert(city.name)}
            />
          )) // verifica si tiene cities y luego hace el map
        }
      </div>
  )
};