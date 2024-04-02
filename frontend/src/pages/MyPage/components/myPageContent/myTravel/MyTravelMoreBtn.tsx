import { Menu, Transition } from '@headlessui/react'
import { AiOutlineMore } from 'react-icons/ai'
// import { useParams } from 'react-router'
import { useRouter } from 'src/hooks/useRouter'
import { useDeleteTravelMutation } from 'src/pages/MyPage/query'

interface MyTravelMoreBtnProps {
	// Define your props here
	travelId: string
}

const MyTravelMoreBtn: React.FC<MyTravelMoreBtnProps> = ({
	travelId,
}: MyTravelMoreBtnProps) => {
	const { routeTo } = useRouter()
	const { mutate: deleteTravel } = useDeleteTravelMutation()

	// const { travelId } = useParams()

	const handleClickModifyButton = () => {
		routeTo(`/travel/edit/${travelId}`)
	}

	const handleClickDeleteButton = () => {
		if (!travelId) {
			alert('travelId가 없습니다.')
			return
		}

		deleteTravel(travelId)
	}

	return (
		<div>
			<Menu as="div" className="relative leading-none">
				<Menu.Button>
					<AiOutlineMore color="#767676" size={24} />
				</Menu.Button>
				<Transition
					enter="transition duration-100 ease-out"
					enterFrom="transform scale-95 opacity-0"
					enterTo="transform scale-100 opacity-100"
					leave="transition duration-75 ease-out"
					leaveFrom="transform scale-100 opacity-100"
					leaveTo="transform scale-95 opacity-0"
				>
					<Menu.Items
						as="ul"
						className="absolute z-10 flex flex-col items-center mt-2 origin-top-right bg-white divide-gray-100 rounded-sm shadow-lg translate-x-1/4 right-1/2 ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<Menu.Item as="li">
							<button
								onClick={handleClickModifyButton}
								className="p-3 text-base text-center w-14 text-point1"
							>
								수정
							</button>
						</Menu.Item>
						<Menu.Item as="li">
							<button
								onClick={handleClickDeleteButton}
								className="p-3 text-base text-center w-14 text-point1"
							>
								삭제
							</button>
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
export default MyTravelMoreBtn
