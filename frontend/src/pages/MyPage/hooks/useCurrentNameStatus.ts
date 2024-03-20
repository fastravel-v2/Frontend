import { useEffect, useState } from 'react'
import { NameMessageType } from '../type'
import { postCheckNameDuplicate } from '../api'

export const useCurrentNameStatus = (name: string) => {
	const [nameStatus, setNameStatus] = useState<NameMessageType>('valid')

	const tooLongPwReg = /^.{10,}$/
	const validCharReg = /^[a-z0-9_.ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/g // 공백이나 유효하지 않은 문자가 포함된 경우

	const getNameStatus = async (name: string) => {
		const isDuplicated = await postCheckNameDuplicate(name)

		if (name.length === 0) {
			setNameStatus('empty')
			return
		}
		if (tooLongPwReg.test(name)) {
			setNameStatus('tooLong')
			return
		} else if (!validCharReg.test(name)) {
			setNameStatus('invalidChar')
			return
		}
		if (isDuplicated) {
			setNameStatus('duplicate')
			return
		}
		setNameStatus('valid')
	}

	useEffect(() => {
		getNameStatus(name)
	}, [name])

	return nameStatus
}
