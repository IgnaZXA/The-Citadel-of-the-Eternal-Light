import React from 'react';
import { LocationProps } from '../../../helpers/interfaces/screensInterfaces/locationInterfaces';
import NearbyLandmark from './NearbyLandmark';

export default function Location({ title, continent, coordinates, landamarks }: LocationProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>Continent: {continent}</p>
      <p>Coordinates: {coordinates.latitude}, {coordinates.longitude}</p>
      
      <p>Nearby Landmarks:</p>
      {landamarks.map((landamark, index) => {
        return (
          <NearbyLandmark key={index} name={landamark.name} distance={landamark.distance} type={landamark.type}></NearbyLandmark>
        );
      })}
      
      

    </>
  );
}
