import { Routes, Route, Link } from "react-router-dom";
import Location from "./pages/Location";
import Defenses from "./pages/Defenses";
import Inhabitants from "./pages/Inhabitants";
import Resources from "./pages/Resources";
import History from "./pages/History";


function Navigator() {


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
                    <Route path="/" element={<Location />} />
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


