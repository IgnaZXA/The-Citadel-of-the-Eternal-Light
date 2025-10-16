
// TODO: Shield 
export type ArmoryItem = {
    type: string;
    quantity: number;
}


export type ResourcesProps = {
    storage: any; // ¿Si en un futuro se almacena por ejemplo hierro?... 
    armory: Armory;
}

export type Armory = {
    weapons: ArmoryItem[];
    shields: ArmoryItem[];
}