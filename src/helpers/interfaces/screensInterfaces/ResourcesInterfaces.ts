
export type ResourcesProps = {
    storage: {
        food: FoodProps;
        water: WaterProps;
    }; // ¿Si en un futuro se almacena por ejemplo hierro?... 
    armory: Armory;
}

// --- Armory Interfaces ---

export type Armory = {
    weapons: ArmoryItem[];
    shields: ArmoryItem[];
}


export type ArmoryItem = {
    type: string;
    quantity: number;
}


// --- Storage Interfaces ---
export type WaterProps = {
    source: string;
    capacity: number;
    unit: string;
}

export type FoodProps = {
    type: string;
    quantity: number;
    unit: string;
};