import { useState } from 'react'
import { useFileToUrl } from '../hooks/useFileToUrl'
import { isValidImageFile } from '../util'

interface EditProfileImageProps {
	currentUserProfileUrl: string | null
}

const EditProfileImage = ({ currentUserProfileUrl }: EditProfileImageProps) => {
	const [imageFile, setImageFile] = useState<File | null>(null) // 서버 전송용 imageFile
	// Todo : useFileToUrl에서 관리되는 imageUrl state를 밖으로 빼서 관리해야 할 것
	const imageUrl = useFileToUrl(imageFile)

	// Todo : 현재 유저 이미지가 있을 경우 그 걸로 반영해주는 쪽으로 작성
	console.log(currentUserProfileUrl)

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
