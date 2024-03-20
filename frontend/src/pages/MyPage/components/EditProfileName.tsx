import { debounce } from 'lodash'
import { IoIosCloseCircle } from 'react-icons/io'

interface EditProfileNameProps {
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
}

const EditProfileName = ({
	// currentUserName,
	name,
	setName,
}: EditProfileNameProps) => {
	const setNameWithDebounce = debounce(
		(currentName) => setName(currentName),
		200
	)
	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('이름이 바뀝니다!')
		const currentName = event.currentTarget.value
		setNameWithDebounce(currentName)
	}
	const handleClickEraseButton = () => {
		setName('')
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
				<button type="button" onClick={handleClickEraseButton}>
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
