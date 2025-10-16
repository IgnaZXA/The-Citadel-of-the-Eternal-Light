import { ArmoryItem } from "../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces";
import ShieldComponent from "./ShieldComponent";
import WeaponComponent from "./WeaponComponent";



function ArmoryCard({weapons, shields}: any){

    return (
        <>
        {/* TODO: Se puede hacer un componente de Weapons y Shields */}
            <div>
                <h2>Weapons</h2>
                {weapons.map((weapon: ArmoryItem, index: number) => {
                    return(<WeaponComponent />);
                })}
            </div>

            <div>
                <h2>Shields</h2>
                {shields.map((shield: ArmoryItem, index: number) => {
                    return (<ShieldComponent key= {index} type={shield.type} quantity={shield.quantity} />);
                })}
            </div>
        </>
    );
}


export default ArmoryCard;