import { FormEvent, useEffect, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
// import { useRouter } from 'src/hooks/useRouter'
// import { NameMessageType } from '../type'
import { useCurrentUser } from 'src/store/queries/useCurrentUser'
import NameMessage from './NameMessage'
import EditProfileSubmit from './EditProfileSubmit'
// import UserNameMessage from './UserNameMessage'

export enum NameMessageInfo {
	'empty' = '닉네임이 비어있습니다.',
	'tooLong' = '닉네임은 최대 10자를 넘을 수 없습니다.',
	'invalidChar' = '유효하지 않은 문자 입력 입니다.',
	'duplicate' = '이미 사용중인 닉네임 입니다.',
	'valid' = '한글/영어/숫자/./밑줄을 사용할 수 있습니다.',
}

// 1. 서버로부터 사용자 정보를 받아온다.
// 2. 사용자 정보의 유저이름을 local state에서 사용한다.
// 3. local state가 변경되면 유효성 검사를 수행한다.
//    - 유효성 검사는 이름이 비어있는지, 이름이 10자를 넘는지, 이름에 특수문자가 있는지 검사한다.
//    - 이름이 중복되는지를 api 요청을 수행한다.
//    - api를 수행하는 동안 버튼을 비활성화한다.
//    - 모든 유형 검사를 통과하면 버튼을 활성화한다.
// 4. 버튼을 누르면 서버로 사용자 정보를 전송한다.

const EditProfile = () => {
	// const { routeTo } = useRouter()
	const { data: currentUser, isLoading } = useCurrentUser()
	const [name, setName] = useState('')
	useEffect(() => {
		currentUser && setName(currentUser.username)
	}, [isLoading])

	// :: Event handler
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('submit!')
		// const profileFormData = new FormData(event.currentTarget)
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
						name={name}
						setName={setName}
					/>
					<EditProfileSubmit name={name} />
					<NameMessage name={name} />
				</form>
			)}
		</>
	)
}

export default EditProfile
