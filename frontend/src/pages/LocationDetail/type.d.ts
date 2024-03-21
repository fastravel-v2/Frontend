export interface LocationDetailType extends LocationDetailPropertiesType {
    spot_id: string;
    // image_url: string[];
    image_urls: string[] | [];
    description: string;
    lat: string;
    long: string;
    name: string;
    category: string[];
    address: string;
}

export interface LocationDetailPropertiesType {
    tel: string | null;
    credit_card: string | null;
    parking: string | null;
    open_time: string | null;
    pets_available: string | null;
    baby_equipment_rental: string | null;
    closed_for_the_day: string | null;
    play_area_for_children: string | null;
    best_menu: string | null;
    rest_date: string | null;
    time_available: string | null;
    sale_items: string | null;
    take_out: string | null;
    fair_day: string | null;
    smoking_section_available: string | null;
    reservation: string | null;
    fee: string | null;
    occupancy: string | null;
    age_limit: string | null;
    scale: string | null;
    start_date: string | null;
    end_date: string | null;
    show_time: string | null;
    parking_fee: string | null;
    travel_time: string | null;
    discount: string | null;
    age_available: string | null;
    seasons: string | null;
    time_required: string | null;
    program: string | null;
}