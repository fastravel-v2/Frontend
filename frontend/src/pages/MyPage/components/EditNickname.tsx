import { useState } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'

const EditNickname = () => {
	const [nickname, setNickname] = useState('')

	const handleChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.currentTarget
		setNickname(value)
	}
	const handleClickButton = () => {
		setNickname('')
	}

	return (
		<div className="relative">
			<input
				type="text"
				name="nickname"
				id="nickname"
				value={nickname}
				onChange={handleChangeNickname}
				className="w-full px-10 py-3 text-2xl font-bold text-center text-black border-b-2 px- border-lightGray2 focus:outline-none"
			/>
			{nickname.length > 0 && (
				<button type="button" onClick={handleClickButton}>
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

export default EditNickname
