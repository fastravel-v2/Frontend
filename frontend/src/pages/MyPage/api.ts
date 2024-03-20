// import { tokenMultipartInstance } from 'src/utility/apis/axios'
import { NameMessageType } from './type'

export const getNameIsDuplicated = async (
	name: string
): Promise<NameMessageType> => {
	// const res = await tokenInstance.post('/user/duplicate', { name })
	// return res.data

	await new Promise((resolve) => setTimeout(resolve, 2000)) // 2초 대기
	console.log(name)
	return 'valid' // 현재는 테스트를 위해 항상 valid를 반환
}

export const putUserProfile = async (
	profileFormData: FormData
): Promise<'success' | 'fail'> => {
	// const editRes = await tokenMultipartInstance.put('/user/profile', profileFormData)
	// return editRes.data

	console.log(profileFormData)
	return 'success'
}
