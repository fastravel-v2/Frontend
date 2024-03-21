import { debounce } from 'lodash'
import { IoIosCloseCircle } from 'react-icons/io'
import { NameMessageType } from '../type'
import { getNameIsDuplicated } from '../api'
import { useEffect, useRef, useState } from 'react'

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
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
	setNameStatus: React.Dispatch<React.SetStateAction<NameMessageType>>
}
// Todo: Axios Cancel Token을 사용하여 중복 검사 중에 다른 검사가 시작되면 이전 검사를 취소하도록 고쳐보기
const EditProfileName = ({
	name,
	setName,
	setNameStatus,
}: EditProfileNameProps) => {
	const [isDisabled, setIsDisabled] = useState(true)
	const nameRef = useRef<string>(name) // 비동기 중복 검사로 인해 nameStatus 값이 덮어씌워지는 것을 방지하기 위한 ref

	useEffect(() => {
		console.log(isDisabled, name)
	}, [isDisabled])

	const getNameStatusWithDebounce = debounce(async (currentName) => {
		let currentStatus

		// :: 유효성 검사
		currentStatus = validateNameWithoutDuplicate(currentName)
		if (currentStatus !== 'valid') {
			setNameStatus(currentStatus)
			return
		}

		// :: 중복 검사
		currentStatus = await getNameIsDuplicated(currentName)
		if (currentName === nameRef.current) {
			setNameStatus(currentStatus)
		}
	}, 500)

	const handleChangeName = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		// setIsDisabled(true) // 입력이 있는 동안은

		const currentName = event.currentTarget.value
		nameRef.current = currentName
		setName(currentName)
		setNameStatus('loading')
		await getNameStatusWithDebounce(currentName)

		setIsDisabled(false)
	}
	const handleClickEraseButton = async () => {
		setName('')
		await getNameStatusWithDebounce('')
	}

	return (
		<div className="relative">
			<input
				value={name}
				type="text"
				name="profile-name"
				id="profile-name"
				onChange={handleChangeName}
				className="w-full px-10 py-3 text-2xl font-bold text-center text-black border-b-2 px- border-lightGray2 focus:outline-none"
			/>
			{name.length > 0 && (
				<button
					type="button"
					onClick={handleClickEraseButton}
					disabled={isDisabled}
				>
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
