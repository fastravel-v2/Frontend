import { instance, tokenInstance } from "src/utility/apis/axios";
// import axios from 'axios'
import { LocationDetailType } from './type'

interface IPlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

export const getLocationDetail = async (
	id: string
): Promise<LocationDetailType> => {
	// api
	const locationDetail = await instance.get(`core/spot/${id}`)
	// const locationDetail = await instance.get(`spot/${id}`)
	return locationDetail.data
}

export const getRecommendationGlobal = async (
	id: string
): Promise<IPlaceInfo[]> => {
	const RecommendationGlobal = await instance.get(`core/recommendation/${id}/global`)
	// const RecommendationGlobal = await instance.get(`recommendation/${id}/global`)
	return RecommendationGlobal.data
	
}

export const getRecommendationLocal = async (
	id: string
): Promise<IPlaceInfo[]> => {
	const RecommendationLocal = await instance.get(`core/recommendation/${id}/local`)
	// const RecommendationLocal = await instance.get(`recommendation/${id}/local`)
	return RecommendationLocal.data
	
}

interface ILikePlace {
	spot_id: string;
	name: string;
	address: string;
	image_url: string;
	memo: string;
}

export const getLikeLocations =async (): Promise<ILikePlace[]> => {
	const likeLocations = await tokenInstance.get(`core/my_spot/list`)
	// const likeLocations = await tokenInstance.get(`my_spot/list`)
	return likeLocations.data
}