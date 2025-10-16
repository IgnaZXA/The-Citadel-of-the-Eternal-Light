//  --- defenses Interfaces ---
export type CitadelDefenses = {
    walls: WallsDefenses;
    towers: TowerDefenses[];
};

export type WallsDefenses = {
    material: string;
    height: number;
    enchantments: Enchantment[];
};

export type Enchantment = {
    name: string;
    level: number;
};


export type TowerDefenses = {
    name: string;
    height: number;
    armament: Armament;
    guards: Guard[];
};

export type Armament = {
    weaponType: string;
    ammunitionType: string;
    ammunitionCount: number;
};

export type Guard = {
    name: string,
    rank: string;
};
