export type InhabitantsProps = {
    roles: (Mage | Soldier | Villager)[];
}

// TODO  role y count se repiten en todos --> clase padre 
export type Mage = {
    role: string;
    count: number;
    equipment: MageEquipment;
};

export type MageEquipment = {
    staff: string;
    robe: string;
    amulet: string;
};

export type Soldier = {
    role: string;
    count: number;
    equipment: SoldierEquipment;

};

export type SoldierEquipment = {
    weapon: string;
    armor: string;
    shield: string;
};


export type Villager = {
    role: string;
    professions: Profession[];
};

export type Profession = {
    type: string;
    count: number;
};