import { ArmoryItem } from "../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces";



function ShieldComponent({type, quantity}: ArmoryItem ){

    return(
        <>
            <p>{type} -- {quantity}</p>
        </>
    );

}

export default ShieldComponent;