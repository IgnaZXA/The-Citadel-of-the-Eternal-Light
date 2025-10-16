import { Landmark } from "../../../helpers/interfaces/citadelJSON";


function NearbyLandmark({ name, type, distance }: Landmark) {

    const chooseNameColor = () => {
        switch (type) {
            case 'Cave':

                return {color: 'red'};

            case 'Ruins':

                return {color: 'yellow'}


            case 'Town':
                return {color: 'blue'}

            default:
                return {color: 'black'};
        }
    }
    return (
        <div style={{ border: '1px solid black' }}>
            <p style={chooseNameColor()}>Name: {name}</p>
            <p>Type: {type}</p>
            <p>DIstance: {distance} Km</p>
        </div>
    );
}


export default NearbyLandmark;