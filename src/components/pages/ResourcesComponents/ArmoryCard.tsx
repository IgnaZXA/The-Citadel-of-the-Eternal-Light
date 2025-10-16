import { ArmoryItem } from "../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces";
import ArmoryItemComponent from "./ArmoryItemComponent";




function ArmoryCard({ weapons, shields }: any) {

    const armoryItems = [weapons, shields];
    const armoryItemsTittle = ["Weapons", "Shields"];

    return (
        <>
            {(armoryItems).map((armoryItems: ArmoryItem[], index: number) => {
                return (
                    <>
                        <h1>{armoryItemsTittle[index]}</h1>
                        {
                            armoryItems.map((armoryItem: ArmoryItem, index: number) => {
                                return (<ArmoryItemComponent key={index} type={armoryItem.type} quantity={armoryItem.quantity} />);
                            })
                        }
                    </>
                );

            })}

        </>
    );
}


export default ArmoryCard;