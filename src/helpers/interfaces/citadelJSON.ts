
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


//  --- defenses Interfaces ---
export type CitadelDefenses = {
    walls: WallsDefenses;
    towers: TowerDefenses[];
};

type WallsDefenses = {
    material: string;
    height: number;
    enchantments: Enchantment[];
};

type Enchantment = {
    name: string;
    level: number;
};


type TowerDefenses = {
    name: string;
    height: number;
    armament: Armament;
    guards: Guard[];
};

type Armament = {
    weaponType: string;
    ammunitionType: string;
    ammunitionCount: number;
};

type Guard = {
    name: string,
    rank: string;
};


// --- inhabitants Intefaces ---

type CitadelInhabitans = {
    roles: Role[];


    /*

        "roles": [
            {
                "role": "Soldier",
                "count": 300,
                "equipment": {
                    "weapon": "Longsword",
                    "armor": "Steel Plate",
                    "shield": "Tower Shield"
                }
            },
            {
                "role": "Mage",
                "count": 100,
                "equipment": {
                    "staff": "Crystal Wand",
                    "robe": "Enchanted Robes",
                    "amulet": "Amulet of Wisdom"
                }
            },
            {
                "role": "Villager",
                "professions": [
                    {
                        "type": "Farmer",
                        "count": 467
                    },
                    {
                        "type": "Blacksmith",
                        "count": 31
                    },
                    {
                        "type": "Merchant",
                        "count": 63
                    },
                    {
                        "type": "Healer",
                        "count": 129
                    },
                    {
                        "type": "Beggar",
                        "count": 97
                    },
                    {
                        "type": "Acolyte",
                        "count": 237
                    }
                ]
            }
        ]

    */
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



