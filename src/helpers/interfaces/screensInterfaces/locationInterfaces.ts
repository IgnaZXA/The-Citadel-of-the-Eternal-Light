

type LocationCoordinates = {
    latitude: number; 
    longitude: number; 
};

type Landmark = {
    name: string;
    type: string;
    distance: number;
};


export type LocationProps = {
    title: string;
    continent: string;
    coordinates: LocationCoordinates;
    landamarks: Landmark[];
};
