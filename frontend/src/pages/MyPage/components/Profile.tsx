import { DefaultProfile } from 'src/assets/svgs'
import { useCurrentUser } from 'src/store/queries/useCurrentUser'

const Profile = () => {
	const { data: userData } = useCurrentUser()
	return (
		<div className="flex flex-col items-center mt-20 mb-16 text-black">
			{userData?.profileImage ? (
				<img
					src={userData.profileImage}
					alt="프로필 이미지"
					className="w-20 h-20 rounded-full"
				/>
			) : (
				<DefaultProfile />
			)}
			<p className="text-2xl font-bold mt-3">{userData?.username}</p>
		</div>
	)
}

export default Profile
