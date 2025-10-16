import React from 'react'
import StorageCard from './StorageCard';
import ArmoryCard from './ArmoryCard';
import { ResourcesProps } from '../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces';

export default function Resources({ storage, armory }: ResourcesProps) {

  return (
    <>
      <h1>Resources</h1>
      <h2>Storage</h2>
      <div>
        <h3>Food</h3>
      </div>

      <div>
        <h3>Water</h3>
      </div>

      <div>
        <h2>Armory</h2>
        <ArmoryCard weapons={armory.weapons} shields={armory.shields}/>
      </div>


    </>
  );
}
