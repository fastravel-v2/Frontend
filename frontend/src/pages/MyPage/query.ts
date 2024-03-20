import { useQuery } from '@tanstack/react-query'
import { getNameIsDuplicated } from './api'
import { NameMessageType } from './type'

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

const validateName = async (name: string): Promise<NameMessageType> => {
	let status: NameMessageType
	status = validateNameWithoutDuplicate(name)

	if (status !== 'valid') return status
	status = await getNameIsDuplicated(name) // 로딩은 사전 유효성 검사가 다 성공할 경우에만 돌아간다.

	console.log('setTiemout을 기다리니?')
	return status
}

// 1. name을 입력받는다.
// 2. name이 변경될 때마다 유효성 검사를 수행한다.
// 3. 유효성 검사를 수행하는 동안 버튼을 비활성화한다.
// 4. 유효성 검사가 끝나면 이름의 중복을 검사한다.
// 5. 이름의 중복 검사가 끝나고 valid 하다면 버튼을 활성화한다.
export const useNameStatusQuery = (name: string) => {
	const {
		data: nameStatus,
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ['duplicateInfo', name],
		queryFn: () => validateName(name),
		refetchOnWindowFocus: false,
	})

	return { nameStatus, isLoading, isFetching }
}
