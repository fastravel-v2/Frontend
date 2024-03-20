import { FormEvent, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
import { useRouter } from 'src/hooks/useRouter'
import { getNameStatus } from '../util'
import { NameMessageType } from '../type'
import { useCurrentUser } from 'src/store/queries/useCurrentUser'

enum NameMessage {
	'empty' = '닉네임이 비어있습니다.',
	'tooLong' = '닉네임은 최대 10자를 넘을 수 없습니다.',
	'invalidChar' = '유효하지 않은 문자 입력 입니다.',
	'duplicate' = '이미 사용중인 닉네임 입니다.',
	'valid' = '한글/영어/숫자/./밑줄을 사용할 수 있습니다.',
}

const EditProfile = () => {
	const { routeTo } = useRouter()
	const [nicknameStatus, setNicknameStatus] = useState<NameMessageType>('valid')
	const { data: currentUser, isLoading } = useCurrentUser()

	// :: Event handler
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const profileFormData = new FormData(event.currentTarget)

		// handleing name input
		const currentName = profileFormData.get('nickname') as string
		const currentNameStatus = getNameStatus(currentName)

		if (currentNameStatus !== 'valid') {
			setNicknameStatus(currentNameStatus)
		} else {
			routeTo('/mypage')
		}

		// handling image input
		const currentImageFile = profileFormData.get('profile-image') as File
		console.log(currentImageFile)
	}

	// :: Rendering
	return (
		<>
			{isLoading || currentUser === undefined ? (
				<div>Loading...</div>
			) : (
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<EditImage currentUserProfileUrl={currentUser.profileImage} />
					<EditProfileName currentUsername={currentUser.username} />
					<button
						type="submit"
						className="py-4 mb-3 text-white rounded bg-green1 mt-9"
					>
						수정 완료
					</button>
					<p
						className={`text-xs text-darkGray1 ${
							nicknameStatus !== 'valid' && 'text-red'
						}`}
					>
						{NameMessage[nicknameStatus]}
					</p>
				</form>
			)}
		</>
	)
}

export default EditProfile
