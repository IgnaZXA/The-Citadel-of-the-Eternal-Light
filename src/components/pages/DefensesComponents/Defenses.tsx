import React from 'react'
import { CitadelDefenses } from '../../../helpers/interfaces/screensInterfaces/DefensesInterfaces';
import TowerComponent from './TowerComponent';
import EnchantmentComponent from './EnchantmentComponent';

export default function Defenses({ walls, towers }: CitadelDefenses) {
  return (
    <>
      <div>Citadel Defensess</div>
      <hr></hr>

      <h1>Walls</h1>
      <p>Material: {walls.material}</p>
      <p>Height: {walls.height}</p>
      <p>Enchantments:</p>
      {walls.enchantments.map((ench, index) => {
        return(<EnchantmentComponent key={index} level={ench.level} name={ench.name}/>); 
      })}
      <hr></hr>
      <br></br>
      <h1>Towers</h1>
      {towers.map((tower, index) => {
        return (<TowerComponent key={index} name={tower.name} height={tower.height} armament={tower.armament} guards={tower.guards} />);
      })}




    </>
  );
}
