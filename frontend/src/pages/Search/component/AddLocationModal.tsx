import { useMyTravelListQuery } from 'src/pages/MyPage/query'
import { TravelType } from 'src/pages/MyPage/type'
import TravelItemToAddLocation from './TravelItemToAddLocation'

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
	const { sortedMyTravelList, isLoading } = useMyTravelListQuery()
	const handleAddLocation = async () => {
		console.log(locationId, '여행지 추가하기!')
		onClose()
	}
	return (
		<section className="absolute bottom-0 bg-white w-full">
			<h1>
				여행지를 추가할 일정을 <br />
				선택해주세요!
			</h1>
			<div className="flex flex-col gap-4">
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
									<h2 className="mb-5 text-sm font-bold">
										{TravelHeader[travelType as TravelType]}
									</h2>
									<ul className="flex flex-col gap-4">
										{sortedMyTravelList[travelType as TravelType].map(
											(travelInfo, index) => {
												return (
													<TravelItemToAddLocation
														key={`${travelInfo + '-' + index}`}
														travelInfo={travelInfo}
													/>
												)
											}
										)}
									</ul>
								</div>
							)
						})
				)}
				<div className="flex justify-between">
					<button
						className="w-32 h-10 text-xs font-bold rounded bg-lightGray4"
						onClick={onClose}
					>
						취소
					</button>
					<button
						className="w-32 h-10 text-xs font-bold text-white rounded bg-green1"
						onClick={handleAddLocation}
					>
						저장하기
					</button>
				</div>
			</div>
		</section>
	)
}

export default AddLocationModal
