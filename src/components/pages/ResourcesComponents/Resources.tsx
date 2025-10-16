import React from 'react'
import StorageCard from './StorageCard';
import ArmoryCard from './ArmoryCard';
import { ResourcesProps } from '../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces';
import WaterStorage from './WaterStorage';
import FoodStorage from './FoodStorage';

export default function Resources({ storage, armory }: ResourcesProps) {

  return (
    <>
      <h1>Resources</h1>
      <h2>Storage</h2>

      <FoodStorage type={storage.food.type} quantity={storage.food.quantity} unit={storage.food.unit}/>

      <WaterStorage source = {storage.water.source} capacity= {storage.water.capacity} unit={storage.water.unit}/>

      <div>
        <h2>Armory</h2>
        <ArmoryCard weapons={armory.weapons} shields={armory.shields}/>
      </div>


    </>
  );
}
