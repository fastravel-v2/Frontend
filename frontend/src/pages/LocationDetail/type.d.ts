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
    category: string[];
    address: string;
}

export interface LocationDetailPropertiesType {
    tel: string | null;
    creditCard: string | null;
    parking: string | null;
    openTime: string | null;
    petsAvailable: string | null;
    babyEquipmentRental: string | null;
    closedForTheDay: string | null;
    playAreaForChildren: string | null;
    bestMenu: string | null;
    restDate: string | null;
    timeAvailable: string | null;
    saleItems: string | null;
    takeOut: string | null;
    fairDay: string | null;
    smokingSectionAvailable: string | null;
    reservation: string | null;
    fee: string | null;
    occupancy: string | null;
    ageLimit: string | null;
    scale: string | null;
    startDate: string | null;
    endDate: string | null;
    showTime: string | null;
    parkingFee: string | null;
    travelTime: string | null;
    discount: string | null;
    ageAvailable: string | null;
    seasons: string | null;
    timeRequired: string | null;
    program: string | null;
}