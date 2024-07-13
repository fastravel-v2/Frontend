import { debounce } from 'lodash'
import { IoIosCloseCircle } from 'react-icons/io'
import { NameMessageType } from '../../pages/MyPage/type'
import { getNameIsDuplicated } from '../../pages/MyPage/api'
import { useRef } from 'react'

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

interface EditProfileNameProps {
	type: 'user' | 'travelCreate' | 'travelEdit'
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
	setNameStatus: React.Dispatch<React.SetStateAction<NameMessageType>>
}
// Todo: Axios Cancel Token을 사용하여 중복 검사 중에 다른 검사가 시작되면 이전 검사를 취소하도록 고쳐보기
const EditProfileName = ({
	type,
	name,
	setName,
	setNameStatus,
}: EditProfileNameProps) => {
	const nameRef = useRef<string>(name) // 비동기 중복 검사로 인해 nameStatus 값이 덮어씌워지는 것을 방지하기 위한 ref

	const getNameStatusWithDebounce = debounce(async (currentName) => {
		console.log('checking...')
		let currentStatus

		// :: 유효성 검사
		currentStatus = validateNameWithoutDuplicate(currentName)
		if (currentStatus !== 'valid') {
			setNameStatus(currentStatus)
			return
		}

		// :: 중복 검사
		if (type === 'user') {
			currentStatus = await getNameIsDuplicated(currentName)
			console.log('duplicate check res', currentStatus)
			if (currentName === nameRef.current) {
				setNameStatus(currentStatus)
			}
		} else {
			setNameStatus('valid')
		}
	}, 500)

	const handleChangeName = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const currentName = event.currentTarget.value
		nameRef.current = currentName
		setName(currentName)
		setNameStatus('loading')
		await getNameStatusWithDebounce(currentName)
	}
	const handleClickEraseButton = async () => {
		console.log('erase')
		setName('')
		nameRef.current = ''
		await getNameStatusWithDebounce(nameRef.current)
	}

	return (
		<div className="relative">
			<input
				value={name}
				type="text"
				name="profileName"
				id="profileName"
				onChange={handleChangeName}
				className="w-full px-10 py-3 text-2xl font-bold text-center text-black border-b-2 px- border-lightGray2 focus:outline-none"
			/>
			{name.length > 0 && (
				<button type="button" onClick={handleClickEraseButton}>
					<IoIosCloseCircle
						size={32}
						color="#C4C4C4"
						className="absolute right-3 translate-y-[-50%] top-1/2"
					/>
				</button>
			)}
		</div>
	)
}

export default EditProfileName
