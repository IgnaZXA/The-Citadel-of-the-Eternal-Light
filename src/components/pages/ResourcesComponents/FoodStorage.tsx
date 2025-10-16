
import { FoodProps } from '../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces';

export default function FoodStorage({ type, quantity, unit}: FoodProps) {

  return (
    <>
      <div style={{border: "1px solid black"}}>
        <h3>Food</h3>  
        <p>Type: {type}</p>
        <p>Quantity: {quantity} {unit}</p>

      </div>
    </>
  );
}