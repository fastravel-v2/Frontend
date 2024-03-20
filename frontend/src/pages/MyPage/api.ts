import { NameMessageType } from './type'

export const getNameIsDuplicated = async (
	name: string
): Promise<NameMessageType> => {
	// const res = await tokenInstance.post('/user/duplicate', { name })
	// return res.data

	await new Promise((resolve) => setTimeout(resolve, 2000)) // 2초 대기

	console.log('suspense test') // 테스트 메시지 출력
	console.log(name) // 입력받은 이름 출력

	return 'valid' // 현재는 테스트를 위해 항상 valid를 반환
}
