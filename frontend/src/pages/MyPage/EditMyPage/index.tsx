import WithHeaderLayout from 'src/components/layout/WithHeaderLayout'
import { useRouter } from 'src/hooks/useRouter'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { IoArrowBackOutline } from 'react-icons/io5'

const EditMyPage = () => {
	const { goBack } = useRouter()

	// :: Header
	const handleLeftFunc = () => {
		goBack()
	}
	const headerMenu: IMenu = {
		left: <IoArrowBackOutline size="2rem" className="text-black" />,
		center: null,
		right: null,
	}
	const headerFunc: IMenuFunc = {
		left_func: handleLeftFunc,
		right_func: undefined,
	}

	return (
		<WithHeaderLayout headerMenu={headerMenu} headerFunc={headerFunc}>
			EditMyPage
		</WithHeaderLayout>
	)
}

export default EditMyPage
