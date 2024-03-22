export interface ITravelDetail {
    id: string;
    info: {
        name: string;
        profileImage: string;
        startDate: string;
        endDate: string;
        travelTags: string[];
        cities: string[];
    }
    plan: IPlan;
}

export interface IPlan {
    places: Record<string, IPlace>;
    days: Record<string, IDay>;
    dayOrder: string[];
}

interface IPlace {
    id: string;
    name: string;
    category: string[];
}

interface IDay {
    id: string;
    day: string;
    placeIds: string[];
}