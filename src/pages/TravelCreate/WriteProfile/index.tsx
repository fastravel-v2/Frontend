import { IoArrowBackOutline } from 'react-icons/io5'
import EditProfile from 'src/components/editProfile/EditProfile'
import DefaultHeader from 'src/components/header/DefaultHeader'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { useCreatingTravelPageTypeStore } from '../store'
import { useParams } from 'react-router-dom'
// import { useTravelInfoQuery } from '../query'

interface WriteProfileProps {
	profileName: string | undefined
	profileImage: string | null | undefined
	isLoading: boolean
}

const WriteProfile = ({
	profileName,
	profileImage,
	isLoading,
}: WriteProfileProps) => {
	const { setPageType } = useCreatingTravelPageTypeStore()
	const { travelId } = useParams()

	// :: Header
	const handleBack = () => {
		setPageType('date')
	}
	const headerMenu: IMenu = {
		left: <IoArrowBackOutline size="2rem" className="text-black" />,
		center: null,
		right: null,
	}
	const headerFunc: IMenuFunc = {
		left_func: handleBack,
		right_func: undefined,
	}

	return (
		<>
			<DefaultHeader menu={headerMenu} func={headerFunc} />
			<h1 className="mt-20 mb-20 text-2xl font-bold text-black">
				여행 일정 등록
			</h1>

			<EditProfile
				type={travelId ? 'travelEdit' : 'travelCreate'}
				profileName={travelId && profileName ? profileName : ''}
				profileImage={travelId && profileImage ? profileImage : null}
				isLoading={isLoading}
			/>
		</>
	)
}

export default WriteProfile
