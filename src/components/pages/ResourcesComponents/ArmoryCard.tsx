import { ArmoryItem } from "../../../helpers/interfaces/screensInterfaces/ResourcesInterfaces";
import ArmoryItemComponent from "./ArmoryItemComponent";




function ArmoryCard({ weapons, shields }: any) {

    const armoryItems = [weapons, shields];
    const armoryItemsTittle = ["Weapons", "Shields"];

    console.log(armoryItems);

    return (
        <>
            {(armoryItems).map((armoryItems: ArmoryItem[], index: number) => {
                return (
                    <div key={index} style={{border: "1px solid black"}}>
                        <h1>{armoryItemsTittle[index]}</h1>
                        {
                            armoryItems.map((armoryItem: ArmoryItem, idx: number) => {
                                return (<ArmoryItemComponent key={idx} type={armoryItem.type} quantity={armoryItem.quantity} />);
                            })
                        }
                    </div>
                );

            })}

        </>
    );
}


export default ArmoryCard;