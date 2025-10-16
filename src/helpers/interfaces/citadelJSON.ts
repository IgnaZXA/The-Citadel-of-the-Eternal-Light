import { CitadelDefenses } from "./screensInterfaces/DefensesInterfaces";

// --- Location Interfaces ---
type CitadelLocation = {
    continent: string;
    coordinates: LocationCoordinates;
    nearbyLandmarks: Landmark[];
}


export type Landmark = {
    name: string;
    type: string;
    distance: number;
};

export type LocationCoordinates = {
    latitude: number;
    longitude: number;
};




// --- inhabitants Intefaces ---

type CitadelInhabitans = {
    roles: Role[];

};

type Role = {

} 

export type citadelJSON = {
    name: string;
    location: CitadelLocation;
    defenses: CitadelDefenses;
    inhabitants: CitadelInhabitans;
    resources: any; // TODO
    history: any; // TODO
}



