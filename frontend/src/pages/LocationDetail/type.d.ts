export interface LocationDetailType extends LocationDetailPropertiesType {
    spot_id: string;
    // image_url: string[];
    image_url: string;
    description: string;
    lat: string;
    long: string;
    name: string;
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