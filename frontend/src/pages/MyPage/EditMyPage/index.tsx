import WithHeaderLayout from 'src/components/layout/WithHeaderLayout'
import { useRouter } from 'src/hooks/useRouter'
import { IMenu, IMenuFunc } from 'src/types/layout'
import { IoArrowBackOutline } from 'react-icons/io5'
import EditProfile from '../../../components/editProfile/EditProfile'
import { useCurrentUser } from './../../../store/queries/useCurrentUser'
import NavbarLayout from 'src/components/layout/NavbarLayout'

const EditMyPage = () => {
	const { goBack } = useRouter()
	const { data: currentUser, isLoading } = useCurrentUser()

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

	// :: Rendering
	return (
		<WithHeaderLayout headerMenu={headerMenu} headerFunc={headerFunc}>
			<NavbarLayout>
				<EditProfile
					type="user"
					profileName={currentUser ? currentUser.username : ''}
					profileImage={currentUser ? currentUser.profileImage : null}
					isLoading={isLoading}
				/>
			</NavbarLayout>
		</WithHeaderLayout>
	)
}

export default EditMyPage
