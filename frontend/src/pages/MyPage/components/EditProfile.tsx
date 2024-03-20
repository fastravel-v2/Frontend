import { FormEvent, useEffect, useState } from 'react'
import EditProfileName from './EditProfileName'
import EditImage from './EditProfileImage'
// import { useRouter } from 'src/hooks/useRouter'
// import { NameMessageType } from '../type'
import { useCurrentUser } from 'src/store/queries/useCurrentUser'
import NameMessage from './NameMessage'
import EditProfileSubmit from './EditProfileSubmit'
import { NameMessageType } from '../type'
import { getNameIsDuplicated } from '../api'
// import UserNameMessage from './UserNameMessage'

export enum NameMessageInfo {
	'empty' = '닉네임이 비어있습니다.',
	'tooLong' = '닉네임은 최대 10자를 넘을 수 없습니다.',
	'invalidChar' = '유효하지 않은 문자 입력 입니다.',
	'duplicate' = '이미 사용중인 닉네임 입니다.',
	'loading' = '중복 검사 중입니다..',
	'valid' = '한글/영어/숫자/./밑줄을 사용할 수 있습니다.',
}

const validateNameWithoutDuplicate = (name: string): NameMessageType => {
	// :: 정규식
	const tooLongPwReg = /^.{10,}$/ // 10자 이상
	const validCharReg = /^[a-z0-9_.ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/g // 공백이나 유효하지 않은 문자가 포함된 경우

	// :: name 유효성 검사
	if (name.length === 0) {
		return 'empty'
	}
	if (tooLongPwReg.test(name)) {
		return 'tooLong'
	} else if (!validCharReg.test(name)) {
		return 'invalidChar'
	}
	return 'valid'
}

const getNameStatus = async (name: string): Promise<NameMessageType> => {
	let status: NameMessageType
	status = validateNameWithoutDuplicate(name)

	if (status !== 'valid') return status
	status = await getNameIsDuplicated(name) // 로딩은 사전 유효성 검사가 다 성공할 경우에만 돌아간다.

	return status
}

// 1. 서버로부터 사용자 정보를 받아온다.
// 2. 사용자 정보의 유저이름을 name state에서 저장한다.
// 3. use
// 3. local state가 변경되면 유효성 검사를 수행한다.
//    - 유효성 검사는 이름이 비어있는지, 이름이 10자를 넘는지, 이름에 특수문자가 있는지 검사한다.
//    - 이름이 중복되는지를 api 요청을 수행한다.
//    - api를 수행하는 동안 버튼을 비활성화한다.
//    - 모든 유형 검사를 통과하면 버튼을 활성화한다.
// 4. 버튼을 누르면 서버로 사용자 정보를 전송한다.

const EditProfile = () => {
	// const { routeTo } = useRouter()
	const { data: currentUser, isLoading } = useCurrentUser()
	const [isInitial, setIsInitial] = useState(true)
	const [name, setName] = useState('')
	const [nameStatus, setNameStatus] = useState<NameMessageType>('valid')

	const validateName = async (name: string) => {
		setNameStatus('loading')
		setNameStatus(await getNameStatus(name))
	}

	useEffect(() => {
		if (!isInitial) {
			validateName(name)
		}
		if (name === currentUser?.username) {
			setIsInitial(false)
		}
	}, [name])

	useEffect(() => {
		currentUser && currentUser.username
	}, [isLoading])

	// :: Event handler
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log('submit!')
	}

	// :: Rendering
	return (
		<>
			{isLoading || currentUser === undefined ? (
				<div>Loading...</div>
			) : (
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<EditImage currentUserProfileUrl={currentUser.profileImage} />
					<EditProfileName name={name} setName={setName} />
					<EditProfileSubmit nameStatus={nameStatus} />
					<NameMessage nameStatus={nameStatus} />
				</form>
			)}
		</>
	)
}

export default EditProfile
