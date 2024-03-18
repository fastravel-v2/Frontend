import { useEffect, useState } from 'react'

export const useFileToUrl = (imageFile: File | null) => {
	const [imageUrl, setImageUrl] = useState<string>(
		'/src/assets/svgs/defaultProfile.svg'
	)

	useEffect(() => {
		const reader = new FileReader()

		reader.onload = (e: ProgressEvent<FileReader>) => {
			const result = e.target?.result
			if (typeof result === 'string') {
				setImageUrl(result)
			}
		}

		imageFile instanceof File && reader && reader.readAsDataURL(imageFile)
	}, [imageFile])

	return imageUrl
}
