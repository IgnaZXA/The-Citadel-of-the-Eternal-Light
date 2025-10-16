import React from 'react';
import { LocationProps } from '../../helpers/interfaces/screensInterfaces/locationInterfaces';

export default function Location({ title, continent, coordinates, landamarks }: LocationProps) {
  return (
    <>
      <div>Location component</div>

      <p>{title}</p>
    </>
  );
}
