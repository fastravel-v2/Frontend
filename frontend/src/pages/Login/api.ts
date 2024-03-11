import { instance } from 'src/utility/apis/axios'

export const postGoogleLogin = async (code: string) => {
	await instance.post('oauth/google', { code })
}
