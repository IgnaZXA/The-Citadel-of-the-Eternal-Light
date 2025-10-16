import { ArmoryItem } from "../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces";



function ArmoryItemComponent({type, quantity}: ArmoryItem ){

    return(
        <>
            <p>{type} -- {quantity}</p>
        </>
    );

}

export default ArmoryItemComponent;