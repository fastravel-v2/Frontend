import { useMemo } from 'react'
import { NameMessageType, TravelMessageType } from '../../pages/MyPage/type'

interface EditProfileSubmitProps {
	type: 'user' | 'travelCreate' | 'travelEdit'
	nameStatus: NameMessageType | TravelMessageType
}
const EditProfileSubmit = ({ type, nameStatus }: EditProfileSubmitProps) => {
	const isDisabled = useMemo(() => nameStatus !== 'valid', [nameStatus])

	// :: Rendering
	return (
		<button
			type="submit"
			className={`py-4 mb-3 text-white rounded bg-green1 mt-9 ${
				isDisabled && 'opacity-50 cursor-not-allowed'
			}`}
			disabled={isDisabled}
		>
			{type ? '완료' : '수정 완료'}
		</button>
	)
}

export default EditProfileSubmit
