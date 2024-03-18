export interface LocationDetailType {
    _id: {
        $oid: string;
    };
    spot_id: string;
    depiction: string[];
    description: string;
    lat: string;
    long: string;
    name: string;
    properties: LocationDetailPropertiesType
    type: string[];
}

export interface LocationDetailPropertiesType {
    location?: string;
    category?: string;
    scale?: string;
    creditCard?: string;
    tel?: string;
    babyEquipmentRental?: string;
    address?: string;
    petsAvailable?: string;
    fee?: string;
    postalCode?: string;
    timeAvailable?: string;
    closedForTheDay?: string;
    parking?: string;
}