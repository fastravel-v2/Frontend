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
                "1000981": {id: '1000981', name: '김춘수 유품전시관', category: ['분류'], lat: '34.8333722569', long: '128.4161841816'},
                "1917811": {id: '1917811', name: '동경호텔', category: ['분류'], lat: '34.8854859532', long: '128.4206990848'},
                "2575406": {id: '2575406', name: '한려숯불갈비', category: ['분류'], lat: '34.8418130104', long: '128.4178838118'},
                "2514027": {id: '2514027', name: '구상문학관', category: ['분류'], lat: '35.9839089375', long: '128.3945994494'},
                "2514751": {id: '2514751', name: '성베네딕도회 왜관수도원', category: ['분류'], lat: '35.9885335668', long: '128.4030096891'},
                "2007732": {id: '2007732', name: '이석고택', category: ['분류'], lat: '35.9959749000', long: '128.4308320241'},
            },
            days: {
                '07.12': {placeIds: ["1000981", "1917811", "2575406"]},
                '07.13': {placeIds: ["2514027", "2514751"]},
                '07.14': {placeIds: ["2007732"]},
                '07.15': {placeIds: []},
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