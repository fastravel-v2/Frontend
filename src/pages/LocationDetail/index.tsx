import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IMenu, IMenuFunc } from 'src/types/layout'
import {
	getLikeLocations,
	getLocationDetail,
	getRecommendationGlobal,
	getRecommendationLocal,
} from './api'
import { LocationDetailType } from './type'
import WithHeaderLayout from 'src/components/layout/WithHeaderLayout'
import Header from './components/Header'
import CarouselComponent from './components/CarouselComponent'
import LikeButton from './components/LikeButton'
import AddToPlanButton from './components/AddToPlanButton'
import Description from './components/Description'
import Properties from './components/Properties'
import MapComponent from './components/MapComponent'
import { FaArrowLeft } from 'react-icons/fa6'
import { useRouter } from 'src/hooks/useRouter'
import PlaceSection from 'src/components/PlaceSection'
import { useMyLocationMemoListQuery } from '../MyPage/query'
import { IoHomeOutline } from 'react-icons/io5'
import NavbarLayout from 'src/components/layout/NavbarLayout'

interface IPlaceInfo {
	spot_id: string
	image_url: string
	name: string
	address: string
}

interface ILikePlace {
	spot_id: string
	name: string
	address: string
	image_url: string
	memo: string
}

const LocationDetail = () => {
	const [locationData, setLocationData] = useState<
		LocationDetailType | undefined
	>(undefined)
	const [recommendLocal, setRecommendLocal] = useState<IPlaceInfo[]>([])
	const [recommendGlobal, setRecommendGlobal] = useState<IPlaceInfo[]>([])
	const [isLoading, setIsLoading] = useState(false)
	// const [memo, setMemo] = useState("")
	const [likedLocation, setLikedLocation] = useState<ILikePlace | undefined>(
		undefined
	)
	const [isLiked, setIsLiked] = useState(false)
	const { id } = useParams()
	const router = useRouter()
	const { myLocationMemoList } = useMyLocationMemoListQuery()

	const refetch = async () => {
		if (id) {
			setIsLoading(true)
			const fetchedData = await getLocationDetail(id)
			const fetchRecommendLocal = await getRecommendationLocal(id)
			const fetchRecommendGlobal = await getRecommendationGlobal(id)
			const fetchLikeLocations = await getLikeLocations()

			setIsLiked(fetchLikeLocations.some((location) => location.spot_id === id))
			// const likedLocation = fetchLikeLocations.find(location => location.spot_id === id)
			// if (likedLocation) {
			//   setMemo(likedLocation.memo)
			// }
			setLikedLocation(
				fetchLikeLocations.find((location) => location.spot_id === id)
			)
			setLocationData(fetchedData)
			setRecommendLocal(fetchRecommendLocal)
			setRecommendGlobal(fetchRecommendGlobal)
			window.scrollTo(0, 0)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		refetch()
	}, [id])

	const headerMenu: IMenu = {
		left: <FaArrowLeft />,
		center: null,
		right: <IoHomeOutline />,
	}

	const headerFunc: IMenuFunc = {
		left_func: router.goBack,
		right_func: () => router.routeTo('/'),
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-screen">
				<p>Loading...</p>
			</div>
		)
	}

	if (!id || !locationData) {
		router.routeTo('/notFound')
		return
	}

	const {
		address,
		tel,
		credit_card,
		parking,
		open_time,
		pets_available,
		baby_equipment_rental,
		closed_for_the_day,
		play_area_for_children,
		best_menu,
		rest_date,
		time_available,
		sale_items,
		take_out,
		fair_day,
		smoking_section_available,
		reservation,
		fee,
		occupancy,
		age_limit,
		scale,
		start_date,
		end_date,
		show_time,
		parking_fee,
		travel_time,
		discount,
		age_available,
		seasons,
		time_required,
		program,
	} = locationData
	const properties = {
		address,
		tel,
		credit_card,
		parking,
		open_time,
		pets_available,
		baby_equipment_rental,
		closed_for_the_day,
		play_area_for_children,
		best_menu,
		rest_date,
		time_available,
		sale_items,
		take_out,
		fair_day,
		smoking_section_available,
		reservation,
		fee,
		occupancy,
		age_limit,
		scale,
		start_date,
		end_date,
		show_time,
		parking_fee,
		travel_time,
		discount,
		age_available,
		seasons,
		time_required,
		program,
	}

	return (
		<WithHeaderLayout headerMenu={headerMenu} headerFunc={headerFunc}>
			<NavbarLayout>
				<Header
					name={locationData.name}
					address={locationData.address}
					locationId={id}
					memo={likedLocation ? myLocationMemoList[id] : ''}
				/>
				{locationData.image_urls.length ? (
					locationData.image_urls.length === 1 ? (
						<div className="flex justify-center">
							<div className="relative rounded-xl h-44 w-full">
								<div className="h-5 absolute top-2 right-4 px-3 z-10 rounded-full text-white bg-darkGray1 flex justify-center items-center">
									<p className="text-xs font-light ">
										{1} / {1}
									</p>
								</div>
								<img
									src={locationData.image_urls[0]}
									alt={`image number ${1}`}
									className="rounded-xl px-1 h-44 w-full"
								/>
							</div>
						</div>
					) : (
						<div className="flex justify-center">
							<CarouselComponent images={locationData.image_urls} />
						</div>
					)
				) : (
					<div className="flex justify-center">
						<div className="h-44 min-h-44 w-full bg-lightGray3 flex justify-center items-center">
							<span className="text-darkGray3">No image...</span>
						</div>
					</div>
				)}
				<div className="flex justify-between w-full gap-4">
					<LikeButton
						locationId={id}
						locationMemo={likedLocation ? myLocationMemoList[id] : ''}
						likeProps={isLiked}
					/>
					<AddToPlanButton locationId={id} />
				</div>
				<Description description={locationData.description} />
				<MapComponent
					lat={Number(locationData.lat)}
					long={Number(locationData.long)}
				/>
				<Properties properties={properties} />
				<div className="mt-4">
					<h3 className="text-lg font-bold text-black mb-3">
						{locationData.name} 근처의 추천 장소
					</h3>
					<PlaceSection places={recommendLocal} />
				</div>
				<div className="mt-4 mb-8">
					<h3 className="text-lg font-bold text-black mb-3">
						{locationData.name}와/과 유사한 장소
					</h3>
					<PlaceSection places={recommendGlobal} />
				</div>
			</NavbarLayout>
		</WithHeaderLayout>
	)
}

export default LocationDetail
