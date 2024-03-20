import { useEffect } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

interface EditProfileNameProps {
	currentUsername: string
	name: string
	setName: React.Dispatch<React.SetStateAction<string>>
}

const EditProfileName = ({
	currentUsername,
	name,
	setName,
}: EditProfileNameProps) => {
	useEffect(() => {
		setName(currentUsername)
	}, [])

	const handleChangeName = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const currentName = event.currentTarget.value
		setName(currentName)
	}
	const handleClickEraseButton = () => {
		setName('')
	}

	return (
		<div className="relative">
			<input
				type="text"
				name="profile-name"
				id="profile-name"
				value={name}
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
