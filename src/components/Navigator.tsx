import { Routes, Route, Link } from "react-router-dom";
import Location from "./pages/LocationComponents/Location";
import Defenses from "./pages/DefensesComponents/Defenses";
import Inhabitants from "./pages/InhabitantsComponents/Inhabitants";
import Resources from "./pages/ResourcesComponents/Resources";
import History from "./pages/HistoryComponents/History";
import { useEffect } from "react";
import { Landmark } from "../helpers/interfaces/citadelJSON";


function Navigator({ citadelJSON }: any) { // TODO: change interface from any to citadelJSON interface

    useEffect(() => {
        console.log("THE ARMORY ")
        console.log(citadelJSON.resources.armory);
        // console.log(citadelJSON.location.nearbyLandmarks);
    }, []);

    const getOrderedLandmarks = () => {
        const landmarks: Landmark[] = citadelJSON.location.nearbyLandmarks;
        for(let i: number = 0; i < landmarks.length; i++){
            for(let j: number= i + 1; j < landmarks.length; j++){
               if(landmarks[i].distance > landmarks[j].distance){
                let aux = landmarks[i]; 
                landmarks[i] = landmarks[j];
                landmarks[j] = aux;
               } 
            }
        }  
        return landmarks;
    };

    return (
        <>
            <div>
                <Link to="/">Location</Link> | {" "}
                <Link to="/Defenses">Defenses</Link> | {" "}
                <Link to="/Inhabitants">Inhabitants</Link> | {" "}
                <Link to="/Resources">Resources</Link> | {" "}
                <Link to="/History">History</Link> | {" "}
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Location title={citadelJSON.name} continent={citadelJSON.location.continent} coordinates={citadelJSON.location.coordinates} landamarks={getOrderedLandmarks()} />} />
                    <Route path="/Defenses" element={<Defenses walls={citadelJSON.defenses.walls} towers={citadelJSON.defenses.towers}/>} />
                    <Route path="/Inhabitants" element={<Inhabitants roles={citadelJSON.inhabitants.roles}/>} />
                    <Route path="/Resources" element={<Resources storage={citadelJSON.resources.storage} armory= {citadelJSON.resources.armory}/>} />
                    <Route path="/History" element={<History founded={citadelJSON.history.founded} majorEvents={citadelJSON.history.majorEvents}/>} />
                </Routes>
            </div>


        </>
    );
}

export default Navigator;


