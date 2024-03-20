import { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

interface EditProfileNameProps {
	currentUsername: string
}

const EditProfileName = ({ currentUsername }: EditProfileNameProps) => {
	const [name, setName] = useState(currentUsername)

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget
		setName(value)
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
