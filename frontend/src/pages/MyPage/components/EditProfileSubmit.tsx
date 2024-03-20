import { useMemo } from 'react'
import { useNameStatusQuery } from '../query'

interface EditProfileSubmitProps {
	name: string
}
const EditProfileSubmit = ({ name }: EditProfileSubmitProps) => {
	const { nameStatus, isLoading, isFetching } = useNameStatusQuery(name)
	const isDisabled = useMemo(
		() => nameStatus !== 'valid' || isLoading || isFetching,
		[nameStatus, isLoading, isFetching]
	)

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
