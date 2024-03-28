import { FormEvent, useEffect, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
import { useRouter } from 'src/hooks/useRouter'
// import { useCurrentUser } from 'src/store/queries/useCurrentUser'
import NameMessage from './NameMessage'
import EditProfileSubmit from './EditProfileSubmit'
import { NameMessageType, TravelMessageType } from '../../pages/MyPage/type'
import { putTravelProfile, putUserProfile } from '../../pages/MyPage/api'

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

const EditProfile = ({
	type,
	profileName,
	profileImage,
	isLoading,
}: EditProfileProps) => {
	const { goBack } = useRouter()
	// const { data: currentUser, isLoading } = useCurrentUser()
	const [name, setName] = useState(profileName)
	const [nameStatus, setNameStatus] = useState<
		NameMessageType | TravelMessageType
	>('initial')

	useEffect(() => {
		if (profileName) {
			setName(profileName)
		}
	}, [profileName])

	// :: Event handler
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const profileFormData = new FormData(event.currentTarget)
		const putProfile = type === 'user' ? putUserProfile : putTravelProfile
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
					<EditProfileSubmit nameStatus={nameStatus} />
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
