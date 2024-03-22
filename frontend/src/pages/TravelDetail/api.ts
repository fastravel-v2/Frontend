import usePlanStore from "./store";
import { ITravelDetail } from "./type";

const dummyData: {data: ITravelDetail} = {
    data : {
        id: '1',
        info: {
            name: '우와여행',
            profileImage: '',
            startDate: '2024.07.12',
            endDate: '2024.07.15',
            travelTags: ['태그1', '태그2'],
            cities: ['도시1', '도시2', '도시3'],
        },
        plan: {
            places: {
                "1": {id: '1', name: 'place 1', category: ['분류']},
                "2": {id: '2', name: 'place 2', category: ['분류']},
                "3": {id: '3', name: 'place 3', category: ['분류']},
                "4": {id: '4', name: 'place 4', category: ['분류']},
                "5": {id: '5', name: 'place 5', category: ['분류']},
                "6": {id: '6', name: 'place 6', category: ['분류']},
            },
            days: {
                '07.12': {id: '1', day: '금', placeIds: ["1", "2", "3"]},
                '07.13': {id: '2', day: '토', placeIds: ["4", "5"]},
                '07.14': {id: '3', day: '일', placeIds: ["6"]},
                '07.15': {id: '4', day: '월', placeIds: []},
            },
            dayOrder: ['07.12', '07.13', '07.14', '07.15']
        }
    }
}

export const getTravelDetail =async (id:string):Promise<ITravelDetail> => {
    // api

    console.log(id)
    const planData = dummyData.data.plan
    const setPlan = usePlanStore.getState().setPlan
    setPlan(planData)
    
    return dummyData.data
}