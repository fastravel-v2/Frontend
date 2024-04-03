import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ITravelDetail } from './type'
import { getTravelDetail } from './api'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { FaArrowLeft } from 'react-icons/fa6'
import Header from './components/Header'
import TravelPlanHeader from './components/TravelPlanHeader'
import DefaultHeader from 'src/components/header/DefaultHeader'
import { useRouter } from 'src/hooks/useRouter'
import { IoHomeOutline } from 'react-icons/io5'
import NavbarLayout from 'src/components/layout/NavbarLayout'

const TravelDetail = () => {
	const [travelData, setTravelData] = useState<ITravelDetail | undefined>(
		undefined
	)
	const { id } = useParams()
	const router = useRouter()

	const refetch = async () => {
		if (id) {
			const fetchedData = await getTravelDetail(id)
			setTravelData(fetchedData)
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

	if (!travelData) {
		router.routeTo('/notFound')
		return
	}

	return (
		<div>
			<DefaultHeader menu={headerMenu} func={headerFunc} />
			<NavbarLayout>
				<Header headerInfo={travelData.info} />
			</NavbarLayout>
			<TravelPlanHeader cities={travelData.info.cities} />
		</div>
	)
}

export default TravelDetail
