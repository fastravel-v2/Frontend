// import NavigateButton from 'src/components/NavigateButton'
import DefaultHeader from 'src/components/header/DefaultHeader'
import Calendar from '../component/Calendar'
import CalendarSubmit from '../component/CalendarSubmit'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { useCreatingTravelPageTypeStore } from '../store'
import { IoArrowBackOutline } from 'react-icons/io5'

const SelectDate = () => {
	const { setPageType } = useCreatingTravelPageTypeStore()

	// :: Header
	const handleBack = () => {
		setPageType('city')
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
			<section className="mt-16">
				<h1 className="mt-6 mb-1 text-2xl font-bold">여행 일정 등록</h1>
				<h2 className="text-sm font-semibold mb-7 text-darkGray3">
					여행 가시는 일정을 알려주세요.
					<br />
					일정에 따른 날씨 정보도 함께 받아볼 수 있습니다.
				</h2>
			</section>
			<Calendar />
			<CalendarSubmit />
		</>
	)
}

export default SelectDate
