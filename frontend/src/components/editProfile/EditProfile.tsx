import { FormEvent, useEffect, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
import { useRouter } from 'src/hooks/useRouter'
import NameMessage from './NameMessage'
import EditProfileSubmit from './EditProfileSubmit'
import { NameMessageType, TravelMessageType } from '../../pages/MyPage/type'
import { putTravelProfile, putUserProfile } from '../../pages/MyPage/api'
import {
	useSelectedCityStore,
	useTravelDateStore,
} from 'src/pages/TravelCreate/store'

export enum NameMessageInfo {
	'initial' = '',
	'empty' = '닉네임이 비어있습니다.',
	'tooLong' = '닉네임은 최대 10자를 넘을 수 없습니다.',
	'invalidChar' = '유효하지 않은 문자 입력 입니다.',
	'duplicate' = '이미 사용중인 닉네임 입니다.',
	'loading' = '중복 검사 중입니다..',
	'valid' = '가능한 닉네임입니다.',
}

export enum TravelNameMessageInfo {}

interface EditProfileProps {
	type: 'user' | 'travel'
	profileName: string
	profileImage: string | null
	isLoading: boolean
}

// Todo: 여행 생성, 사용자 프로필 수정 페이지에서 사용되는데 컴포넌트의 재사용성이 여기에만 국한된 거 같아서 분리해서 사용하는 방법을 찾아보기
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
	const { startDate, endDate } = useTravelDateStore()
	const { selectedCities } = useSelectedCityStore()

	useEffect(() => {
		if (profileName) {
			setName(profileName)
		}
	}, [profileName])

	const setAdditionalTravelInfo = (formData: FormData) => {
		formData.append('startDate', startDate.toISOString())
		formData.append('endDate', endDate ? endDate.toISOString() : '')
		formData.append('cities', JSON.stringify(selectedCities))
	}

	// :: Event handler
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		// make formdata &&  select api function
		const profileFormData = new FormData(event.currentTarget)
		type === 'travel' && setAdditionalTravelInfo(profileFormData)
		const putProfile = type === 'user' ? putUserProfile : putTravelProfile

		// :: Check formdata
		// console.log(profileFormData.get('profile-name'))
		// console.log(profileFormData.get('profile-image'))
		// console.log(profileFormData.get('startDate'))
		// console.log(profileFormData.get('endDate'))
		// console.log(profileFormData.get('cities'))

		const editRes = await putProfile(profileFormData)
		if (editRes === 'success') {
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
					<EditProfileSubmit type={type} nameStatus={nameStatus} />
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
