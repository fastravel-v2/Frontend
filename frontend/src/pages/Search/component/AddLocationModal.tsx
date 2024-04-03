import { useMyTravelListQuery } from 'src/pages/MyPage/query'
import { TravelType } from 'src/pages/MyPage/type'
import TravelItemToAddLocation from './TravelItemToAddLocation'
import { useMemo, useState } from 'react'
import { formatISO } from 'date-fns'
import { postLocationToTravelPlan } from '../api'

enum TravelHeader {
	past = '지난 여행',
	present = '진행중인 여행',
	future = '예정된 여행',
}

interface IAddLocationModalProps {
	locationId: string
	onClose: () => void
}

const AddLocationModal = ({ locationId, onClose }: IAddLocationModalProps) => {
	const [selectedTravelId, setSelectedTravelId] = useState('')
	const [selectedDayNumber, setSelectedDayNumber] = useState('')
	const { sortedMyTravelList, isLoading } = useMyTravelListQuery()

	const isDisabled = useMemo(
		() => selectedTravelId === '' || selectedDayNumber === '',
		[selectedTravelId, selectedDayNumber]
	)

	// :: Event Handlers
	const handleAddLocation = async () => {
		console.log(
			'locationId:',
			locationId,
			'travelId:',
			selectedTravelId,
			'DayNumber:',
			selectedDayNumber,
			'여행지 추가하기!'
		)

		const selectedDate = new Date(formatISO(selectedDayNumber)).toISOString()
		await postLocationToTravelPlan(locationId, selectedTravelId, selectedDate)

		onClose()
	}
	return (
		<div className="fixed inset-0 z-[120] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none ">
			<div className="fixed inset-0 transition-opacity">
				<button
					className="absolute inset-0 bg-black opacity-50"
					onClick={onClose}
				></button>
			</div>
			<div className="absolute bottom-0 z-[130] bg-white w-full flex flex-col items-center pt-16 rounded-t-2xl">
				<h1 className="font-bold text-xl">
					여행지를 추가할 일정을 <br />
					선택해주세요!
				</h1>
				<div className="flex flex-col gap-4 w-full p-5 mb-14">
					{isLoading ? (
						<>Loading...</>
					) : (
						Object.keys(sortedMyTravelList)
							.filter(
								(travelType) =>
									sortedMyTravelList[travelType as TravelType].length > 0
							)
							.map((travelType) => {
								return (
									<div key={travelType}>
										<h2 className="mb-2 text-lg font-bold">
											{TravelHeader[travelType as TravelType]}
										</h2>
										<ul className="flex flex-col gap-4">
											{sortedMyTravelList[travelType as TravelType].map(
												(travelInfo, index) => {
													return (
														<TravelItemToAddLocation
															key={`${travelInfo + '-' + index}`}
															travelInfo={travelInfo}
															selectedTravelId={selectedTravelId}
															setSelectedTravelId={setSelectedTravelId}
															selectedDayNumber={selectedDayNumber}
															setSelectedDayNumber={setSelectedDayNumber}
														/>
													)
												}
											)}
										</ul>
									</div>
								)
							})
					)}
				</div>
				<button
					className={
						'absolute bottom-0 w-full py-4 font-bold text-white bg-green1 ' +
						(isDisabled && 'cursor-not-allowed opacity-50')
					}
					onClick={handleAddLocation}
					disabled={isDisabled}
				>
					일정에 추가
				</button>
			</div>
		</div>
	)
}

export default AddLocationModal
