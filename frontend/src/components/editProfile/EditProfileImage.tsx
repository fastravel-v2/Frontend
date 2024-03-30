import { useEffect, useState } from 'react'
import { useUserProfileImage } from 'src/pages/MyPage/hooks/useUserProfileImage'
import { isValidImageFile } from 'src/pages/MyPage/util'

interface EditProfileImageProps {
	type: 'user' | 'travel'
	currentUserProfileUrl: string | null
}

const EditProfileImage = ({
	type,
	currentUserProfileUrl,
}: EditProfileImageProps) => {
	const [imageFile, setImageFile] = useState<File | null>(null) // 서버 전송용 이미지_imageFile(File type)
	const profileUrl = useUserProfileImage(imageFile, currentUserProfileUrl) // 클라이언트 표시용 이미지_profileUrl(String type)

	useEffect(() => {
		console.log(imageFile)
	}, [imageFile])

	const handleChangeImageFile = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const fileInput = event.currentTarget
		const selectedFile = (fileInput.files as FileList)[0]
		console.log(selectedFile)

		if (!isValidImageFile(selectedFile)) {
			return
		}

		setImageFile(selectedFile)
	}

	return (
		<label className="self-center">
			<img
				src={
					profileUrl
						? profileUrl
						: type === 'user'
						? '/src/assets/svgs/defaultProfile.svg'
						: '/src/assets/svgs/defaultLocation.svg'
				}
				alt="프로필 이미지"
				className="w-20 h-20 rounded-full"
			/>
			<input
				type="file"
				name="profileImage"
				onChange={handleChangeImageFile}
				className="hidden"
			/>
		</label>
	)
}

export default EditProfileImage
