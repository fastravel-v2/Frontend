import { FormEvent, useEffect, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
import { useRouter } from 'src/hooks/useRouter'
import NameMessage from './NameMessage'
import EditProfileSubmit from './EditProfileSubmit'
import { NameMessageType, TravelMessageType } from '../../pages/MyPage/type'
import {
	useSelectedCityStore,
	useTravelDateStore,
} from 'src/pages/TravelCreate/store'
import {
	postTravelProfileCreate,
	putTravelProfileEdit,
} from 'src/pages/TravelCreate/api'
import { putUserProfile } from 'src/pages/MyPage/api'
import { useParams } from 'react-router-dom'
import { formatISO } from 'date-fns'

export enum NameMessageInfo {
	'initial' = '',
	'empty' = '이름이 비어있습니다.',
	'tooLong' = '이름은 최대 10자를 넘을 수 없습니다.',
	'invalidChar' = '유효하지 않은 문자 입력 입니다.',
	'duplicate' = '이미 사용중인 이름 입니다.',
	'loading' = '중복 검사 중입니다..',
	'valid' = '가능한 프로필 이름입니다.',
}

// Todo: 이렇게 사용할 거면 여행 프로필 전용 문구도 관리하는게 좋을 것 같다.
export enum TravelNameMessageInfo {}

interface EditProfileProps {
	type: 'user' | 'travelCreate' | 'travelEdit'
	profileName: string
	profileImage: string | null
	isLoading: boolean
}

// Todo: 여행 생성, 여행 수정, 사용자 프로필 수정 페이지에서 사용되는데 컴포넌트의 재사용성이 여기에만 국한된 거 같아서 분리해서 사용하는 방법을 찾아보기
const EditProfile = ({
	type,
	profileName,
	profileImage,
	isLoading,
}: EditProfileProps) => {
	const { goBack } = useRouter()

	const [name, setName] = useState(profileName)
	const [nameStatus, setNameStatus] = useState<
		NameMessageType | TravelMessageType
	>('initial')

	// For travel profile
	const { startDate, endDate } = useTravelDateStore()
	const { selectedCities } = useSelectedCityStore()
	const { travelId } = useParams()

	useEffect(() => {
		if (profileName) {
			setName(profileName)
		}
	}, [profileName])

	const setAdditionalTravelInfo = (formData: FormData) => {
		formData.append(
			'startDate',
			startDate
				? new Date(
						formatISO(startDate, { representation: 'date' })
				  ).toISOString()
				: ''
		)
		formData.append(
			'endDate',
			endDate
				? new Date(formatISO(endDate, { representation: 'date' })).toISOString()
				: ''
		)
		formData.append(
			'cities',
			JSON.stringify(selectedCities.map((cityInfo) => cityInfo.id))
		)
	}

	// :: Event handler
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// make formdata &&  select api function
		const profileFormData = new FormData(event.currentTarget)
		if (type === 'travelCreate' || type === 'travelEdit') {
			setAdditionalTravelInfo(profileFormData)
		}
		if (type === 'travelEdit') {
			profileFormData.append('planId', String(travelId))
		}

		// :: Check formdata
		// console.log(profileFormData.get('profile-name'))
		// console.log(profileFormData.get('profile-image'))
		// console.log(profileFormData.get('startDate'))
		// console.log(profileFormData.get('endDate'))
		// console.log(profileFormData.get('cities'))

		// api call
		let profileApiRes
		if (type === 'user') {
			profileApiRes = await putUserProfile(profileFormData)
		} else if (type === 'travelCreate') {
			profileApiRes = await postTravelProfileCreate(profileFormData)
		} else if (travelId) {
			profileApiRes = await putTravelProfileEdit(profileFormData)
		}

		if (profileApiRes === 'success') {
			goBack()
		}
	}

	// :: Rendering
	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<EditImage currentUserProfileUrl={profileImage} type={type} />
					<EditProfileName
						type={type}
						setNameStatus={setNameStatus}
						name={name}
						setName={setName}
					/>
					<EditProfileSubmit type={type} nameStatus={nameStatus} name={name} />
					<p className="text-xs text-darkGray1">
						한글/영어/숫자/./밑줄을 사용할 수 있습니다.
					</p>
					<NameMessage nameStatus={nameStatus} />
				</form>
			)}
		</>
	)
}

export default EditProfile
