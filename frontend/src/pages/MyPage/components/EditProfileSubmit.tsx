import { useMemo } from 'react'
import { useCurrentNameStatus } from '../hooks/useCurrentNameStatus'

interface EditProfileSubmitProps {
	name: string
}
const EditProfileSubmit = ({ name }: EditProfileSubmitProps) => {
	const nameStatus = useCurrentNameStatus(name)
	const isDisabled = useMemo(() => nameStatus !== 'valid', [nameStatus])

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
