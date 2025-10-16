
import { ResourcesProps, WaterProps } from '../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces';

export default function WaterStorage({ source, capacity, unit}: WaterProps) {

  return (
    <>
      <div style={{border: "1px solid black"}}>
        <h3>Water</h3>  
        <p>Source: {source}</p>
        <p>Capacity: {capacity} {unit}</p>

      </div>
    </>
  );
}