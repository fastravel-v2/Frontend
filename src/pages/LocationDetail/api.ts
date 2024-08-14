// import { instance, tokenInstance } from 'src/utility/apis/axios'
// import axios from 'axios'
import { LocationDetailType } from './type'
import {
	dummyLikes,
	dummyLocationDetail,
	dummyRecommendationsGlobal,
	dummyRecommendationsLocal,
} from 'src/dummyData/LocationDetailData'

interface IPlaceInfo {
	spotId: string
	imageUrl: string
	name: string
	address: string
}

export const getLocationDetail = async (
	id: string
): Promise<LocationDetailType> => {
	// api
	// const locationDetail = await instance.get(`core/spot/${id}`)
	// return locationDetail.data

	// dummy
	console.log(id)
	return dummyLocationDetail
}

export const getRecommendationGlobal = async (
	id: string
): Promise<IPlaceInfo[]> => {
	// api
	// const RecommendationGlobal = await instance.get(
	// 	`core/recommendation/${id}/global`
	// )
	// return RecommendationGlobal.data

	// dummy
	console.log(id)
	return dummyRecommendationsGlobal
}

export const getRecommendationLocal = async (
	id: string
): Promise<IPlaceInfo[]> => {
	// api
	// const RecommendationLocal = await instance.get(
	// 	`core/recommendation/${id}/local`
	// )
	// return RecommendationLocal.data

	// dummy
	console.log(id)
	return dummyRecommendationsLocal
}

interface ILikePlace {
	spotId: string
	name: string
	address: string
	imageUrl: string
	memo: string
}

export const getLikeLocations = async (): Promise<ILikePlace[]> => {
	// api
	// const likeLocations = await tokenInstance.get(`core/my_spot/list`)
	// return likeLocations.data

	return dummyLikes
}
