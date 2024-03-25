import { useMemo } from 'react'
import { NameMessageType } from '../../type'

interface EditProfileSubmitProps {
	nameStatus: NameMessageType
}
const EditProfileSubmit = ({ nameStatus }: EditProfileSubmitProps) => {
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
			수정 완료
		</button>
	)
}

export default EditProfileSubmit
