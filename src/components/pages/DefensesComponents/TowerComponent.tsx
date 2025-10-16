import React from 'react'
import { TowerDefenses } from '../../../helpers/interfaces/screensInterfaces/DefensesInterfaces';

export default function TowerComponent({name, height, armament, guards}: TowerDefenses) {
  return (
        <div style={{border: "1px solid black"}}>
            <h2>{name}</h2>
            <p>Height: {height}</p>
            
        </div>
  );
}
