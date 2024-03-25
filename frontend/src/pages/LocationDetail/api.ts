// import { instance } from "src/utility/apis/axios";
import axios from "axios";
import { LocationDetailType } from "./type";

export const getLocationDetail = async (id: string):Promise<LocationDetailType> => {
    // api
    // const locationDetail = await instance.get(`location/${id}`)
    // return locationDetail.data
    try {
        const response = await axios.get(`http://192.168.100.154:8000/place/${id}`)
        return response.data
    } catch (error) {
        console.error("error", error)
        throw error
    }
    // console.log(id)
    // return dummyData.data
}