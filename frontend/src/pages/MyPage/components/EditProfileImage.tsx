import { useState } from 'react'
import { useFileToUrl } from '../hooks/useFileToUrl'
import { isValidImageFile } from '../util'

const EditProfileImage = () => {
	const [imageFile, setImageFile] = useState<File | null>(null) // 서버 전송용 imageFile
	const imageUrl = useFileToUrl(imageFile)

	const handleChangeImageFile = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const fileInput = event.currentTarget
		const selectedFile = (fileInput.files as FileList)[0]

		if (!isValidImageFile(selectedFile)) {
			return
		}

		setImageFile(selectedFile)
	}

	return (
		<label className="self-center">
			<img
				src={imageUrl}
				alt="프로필 이미지"
				className="w-20 h-20 rounded-full"
			/>
			<input
				type="file"
				name="profile-image"
				id=""
				onChange={handleChangeImageFile}
				className="hidden"
			/>
		</label>
	)
}

export default EditProfileImage
