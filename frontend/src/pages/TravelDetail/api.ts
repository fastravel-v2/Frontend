import { tokenInstance } from "src/utility/apis/axios";
import usePlanStore from "./store";
import { ITravelDetail, IPlan, IDay, IPlace } from "./type";

interface IRPlan {
    places: Record<string, IPlace>;
    days: Record<string, string[]>;
    dayOrder: string[];
}

interface IRTravel {
    id: number;
    info: {
        info: {
            name: string;
            profileImage: string | null;
            startDate: string;
            endDate: string;
            cities: number[];
        }
    };
    plan: IRPlan;
}

interface IDaysObject {
    [date: string]: IDay;
}

const generateDayOrder = (startDateStr: string, endDateStr: string) => {
    const startDate = new Date(startDateStr)
    const endDate = new Date(endDateStr)
    const dayOrder: string[] = []

    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
        const formattedDate = date.toISOString().split('T')[0]
        dayOrder.push(formattedDate)
    }

    return dayOrder
}

const generateDaysObject = (dayOrder: string[], days: Record<string, string[]>): IDaysObject => {
    const result: IDaysObject = {}

    dayOrder.forEach((date) => {
        result[date] = {placeIds: days[date] || []}
    })

    return result
}

export const getTravelDetail =async (id:string):Promise<ITravelDetail> => {
    // api
    const travelDetail: {data: IRTravel} = await tokenInstance.get(`travel/plan/${id}`)

    const dayOrder = generateDayOrder(travelDetail.data.info.info.startDate, travelDetail.data.info.info.endDate)
    const days = generateDaysObject(dayOrder, travelDetail.data.plan.days)

    const planData: IPlan = {...travelDetail.data.plan, days, dayOrder}
    const setPlan = usePlanStore.getState().setPlan
    setPlan(planData)

    const response = {
        id: travelDetail.data.id.toString(),
        info: travelDetail.data.info.info,
        plan: planData
    }
    
    return response
}