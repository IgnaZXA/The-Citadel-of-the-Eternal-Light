import { Routes, Route, Link } from "react-router-dom";
import Location from "./pages/LocationComponents/Location";
import Defenses from "./pages/Defenses";
import Inhabitants from "./pages/Inhabitants";
import Resources from "./pages/Resources";
import History from "./pages/History";
import { useEffect } from "react";
import { Landmark } from "../helpers/interfaces/citadelJSON";


function Navigator({ citadelJSON }: any) { // TODO: change interface from any to citadelJSON interface

    useEffect(() => {
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

        for(let i = 0; i < landmarks.length; i++){
            console.log(landmarks[i].distance);
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
                    <Route path="/Defenses" element={<Defenses />} />
                    <Route path="/Inhabitants" element={<Inhabitants />} />
                    <Route path="/Resources" element={<Resources />} />
                    <Route path="/History" element={<History />} />
                </Routes>
            </div>


        </>
    );
}

export default Navigator;


