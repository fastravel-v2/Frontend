import { DefaultLocation } from 'src/assets/svgs'
import { MyTravel } from 'src/pages/MyPage/type'
import { formatDateString } from './../../../utility/utils/dateUtil'

interface ITravelItemToAddLocationProps {
	travelInfo: MyTravel
}

const TravelItemToAddLocation = ({
	travelInfo,
}: ITravelItemToAddLocationProps) => {
	const handleSelectTravel = () => {
		console.log('여행 일정 선택! 날짜 컴포넌트 열려라 얍!')
	}
	return (
		<li className="flex items-center ">
			<button onClick={handleSelectTravel}>
				{travelInfo.planImage ? (
					<img
						src={travelInfo.planImage}
						alt="여행지 이미지"
						className="mr-4 rounded-full w-14 h-14"
					/>
				) : (
					<DefaultLocation className="mr-4 rounded-full w-14 h-14" />
				)}
				<div className="flex flex-col">
					<p className="text-sm font-semibold text-black mb-[6px]">
						{travelInfo.planName}
					</p>
					<p className="mb-1 text-xs font-semibold text-darkGray1">
						{formatDateString(travelInfo.startDate) +
							'~' +
							formatDateString(travelInfo.endDate)}
					</p>
				</div>
			</button>

			{/* <DateItemToAddLocation /> */}
		</li>
	)
}

export default TravelItemToAddLocation
