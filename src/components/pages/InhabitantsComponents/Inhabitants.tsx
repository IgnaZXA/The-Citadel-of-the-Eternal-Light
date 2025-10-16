import React from 'react'
import { InhabitantsProps } from '../../../helpers/interfaces/screensInterfaces/InhabitantsInterfaces';

export default function Inhabitants({ roles }: any) {


  const getInhabitantsCount = () => {
    let sum = 0;
    for (let i = 0; i < roles.length; i++) {
      const rol = roles[i];
      if (rol.role === 'Villager') {
        for (let j = 0; j < rol.professions.length; j++) {
          sum += rol.professions[j].count;
        }
      } else {
        sum += rol.count;
      }
    }

    console.log(sum);
    return sum;
  }

  const getListOfRoles = () => {
    return roles.map((rol: any, index: number) => {
      return (<div key={index}><p>{rol.role}</p></div>);
    })
  }

  return (
    <div>
      <h1>Inhabitants</h1>
      <p>Total Population: {getInhabitantsCount()}</p>

      <p>List Of Roles: </p>
      {getListOfRoles()}


    </div>
  );
}
