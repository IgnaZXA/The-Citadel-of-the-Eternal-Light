import { Landmark, LocationCoordinates } from "../citadelJSON";





export type LocationProps = {
    title: string;
    continent: string;
    coordinates: LocationCoordinates;
    landamarks: Landmark[];
};
