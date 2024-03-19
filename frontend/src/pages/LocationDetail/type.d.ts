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
    location: string | null;
    category: string | null;
    scale: string | null;
    creditCard: string | null;
    tel: string | null;
    babyEquipmentRental: string | null;
    address: string | null;
    petsAvailable: string | null;
    fee: string | null;
    postalCode: string | null;
    timeAvailable: string | null;
    closedForTheDay: string | null;
    parking: string | null;
}