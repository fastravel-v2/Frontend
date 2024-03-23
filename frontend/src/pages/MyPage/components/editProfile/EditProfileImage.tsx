import { useState } from 'react'
import { isValidImageFile } from '../../util'
import { useUserProfileImage } from '../../hooks/useUserProfileImage'

interface EditProfileImageProps {
	currentUserProfileUrl: string | null
}

const EditProfileImage = ({ currentUserProfileUrl }: EditProfileImageProps) => {
	const [imageFile, setImageFile] = useState<File | null>(null) // 서버 전송용 imageFile
	const profileUrl = useUserProfileImage(imageFile, currentUserProfileUrl)

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
				src={
					profileUrl ? profileUrl : '/src/assets/svgs/defaultProfile1234.svg'
				}
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
