import { DefaultLocation } from 'src/assets/svgs'
import { MyTravel } from 'src/pages/MyPage/type'
import { formatDateString } from './../../../utility/utils/dateUtil'
import DateItemToAddLocation from './DateItemToAddLocation'

interface ITravelItemToAddLocationProps {
	travelInfo: MyTravel
	selectedTravelId: string
	setSelectedTravelId: React.Dispatch<React.SetStateAction<string>>
	selectedDayNumber: string
	setSelectedDayNumber: React.Dispatch<React.SetStateAction<string>>
}

const TravelItemToAddLocation = ({
	travelInfo,
	selectedTravelId,
	setSelectedTravelId,
	selectedDayNumber,
	setSelectedDayNumber,
}: ITravelItemToAddLocationProps) => {
	const handleSelectTravel = () => {
		setSelectedTravelId(String(travelInfo.planId))
	}

	return (
		<li>
			<button onClick={handleSelectTravel} className="flex items-center mb-5">
				{travelInfo.planImage ? (
					<img
						src={travelInfo.planImage}
						alt="여행지 이미지"
						className="mr-4 rounded-full w-14 h-14"
					/>
				) : (
					<DefaultLocation className="mr-4 rounded-full w-14 h-14" />
				)}
				<div className="flex flex-col text-left">
					<p className="text-sm font-semibold text-black mb-[6px]">
						{travelInfo.planName}
					</p>
					<p className="mb-1 text-xs font-semibold text-black">
						{formatDateString(travelInfo.startDate) +
							' ~ ' +
							formatDateString(travelInfo.endDate)}
					</p>
				</div>
			</button>
			{selectedTravelId === String(travelInfo.planId) && (
				<DateItemToAddLocation
					startDate={new Date(travelInfo.startDate)}
					endDate={new Date(travelInfo.endDate)}
					selectedDayNumber={selectedDayNumber}
					setSelectedDayNumber={setSelectedDayNumber}
				/>
			)}
		</li>
	)
}

export default TravelItemToAddLocation
