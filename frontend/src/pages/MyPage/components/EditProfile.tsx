import { FormEvent, useEffect, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
import { useRouter } from 'src/hooks/useRouter'
import { useCurrentUser } from 'src/store/queries/useCurrentUser'
import NameMessage from './NameMessage'
import EditProfileSubmit from './EditProfileSubmit'
import { NameMessageType } from '../type'
import { putUserProfile } from '../api'

export enum NameMessageInfo {
	'empty' = '닉네임이 비어있습니다.',
	'tooLong' = '닉네임은 최대 10자를 넘을 수 없습니다.',
	'invalidChar' = '유효하지 않은 문자 입력 입니다.',
	'duplicate' = '이미 사용중인 닉네임 입니다.',
	'loading' = '중복 검사 중입니다..',
	'valid' = '한글/영어/숫자/./밑줄을 사용할 수 있습니다.',
}

const EditProfile = () => {
	const { routeTo } = useRouter()
	const { data: currentUser, isLoading } = useCurrentUser()
	const [name, setName] = useState('')
	const [nameStatus, setNameStatus] = useState<NameMessageType>('valid')

	useEffect(() => {
		if (currentUser) {
			setName(currentUser.username)
		}
	}, [isLoading])

	// :: Event handler
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const profileFormData = new FormData(event.currentTarget)
		const editRes = await putUserProfile(profileFormData)
		if (editRes === 'success') {
			routeTo('/mypage')
		}
	}

	// :: Rendering
	return (
		<>
			{isLoading || currentUser === undefined ? (
				<div>Loading...</div>
			) : (
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<EditImage currentUserProfileUrl={currentUser.profileImage} />
					<EditProfileName
						setNameStatus={setNameStatus}
						name={name}
						setName={setName}
					/>
					<EditProfileSubmit nameStatus={nameStatus} />
					<NameMessage nameStatus={nameStatus} />
				</form>
			)}
		</>
	)
}

export default EditProfile
