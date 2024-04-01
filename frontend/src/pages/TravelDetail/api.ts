// import { tokenInstance } from "src/utility/apis/axios";
import usePlanStore from "./store";
// import { ITravelDetail, IPlan, IDay, IPlace } from "./type";
import { ITravelDetail } from "./type";

const dummyData: {data: ITravelDetail} = {
    data : {
        id: '1',
        info: {
            name: '우와여행',
            profileImage: '',
            startDate: '2024.07.12',
            endDate: '2024.07.15',
            cities: [4, 5],
        },
        plan: {
            places: {
                "1000981": {id: '1000981', name: '김춘수 유품전시관', category: [3], lat: '34.8333722569', long: '128.4161841816'},
                "1917811": {id: '1917811', name: '동경호텔', category: [1], lat: '34.8854859532', long: '128.4206990848'},
                "2575406": {id: '2575406', name: '한려숯불갈비', category: [2], lat: '34.8418130104', long: '128.4178838118'},
                "2514027": {id: '2514027', name: '구상문학관', category: [4], lat: '35.9839089375', long: '128.3945994494'},
                "2514751": {id: '2514751', name: '성베네딕도회 왜관수도원', category: [5], lat: '35.9885335668', long: '128.4030096891'},
                "2007732": {id: '2007732', name: '이석고택', category: [6], lat: '35.9959749000', long: '128.4308320241'},
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

// interface IRPlan {
//     places: Record<string, IPlace>;
//     days: Record<string, string[]>;
//     dayOrder: string[];
// }

// interface IRTravel {
//     id: number;
//     info: {
//         info: {
//             name: string;
//             profileImage: string | null;
//             startDate: string;
//             endDate: string;
//             cities: number[];
//         }
//     };
//     plan: IRPlan;
// }

// interface IDaysObject {
//     [date: string]: IDay;
// }

// const generateDayOrder = (startDateStr: string, endDateStr: string) => {
//     const startDate = new Date(startDateStr)
//     const endDate = new Date(endDateStr)
//     const dayOrder: string[] = []

//     for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
//         const formattedDate = date.toISOString().split('T')[0]
//         dayOrder.push(formattedDate)
//     }

//     return dayOrder
// }

// const generateDaysObject = (dayOrder: string[], days: Record<string, string[]>): IDaysObject => {
//     const result: IDaysObject = {}

//     dayOrder.forEach((date) => {
//         result[date] = {placeIds: days[date] || []}
//     })

//     return result
// }

export const getTravelDetail =async (id:string):Promise<ITravelDetail> => {
    // api
    // const travelDetail: {data: IRTravel} = await tokenInstance.get(`travel/plan/${id}`)

    // const dayOrder = generateDayOrder(travelDetail.data.info.info.startDate, travelDetail.data.info.info.endDate)
    // const days = generateDaysObject(dayOrder, travelDetail.data.plan.days)

    // const planData: IPlan = {...travelDetail.data.plan, days, dayOrder}
    // const setPlan = usePlanStore.getState().setPlan
    // setPlan(planData)

    // const response = {
    //     id: travelDetail.data.id.toString(),
    //     info: travelDetail.data.info.info,
    //     plan: planData
    // }
    // return response

    console.log(id)
    const planData = dummyData.data.plan
    const setPlan = usePlanStore.getState().setPlan
    setPlan(planData)
    
    return dummyData.data
    
}