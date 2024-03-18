import { DefaultProfile } from 'src/assets/svgs'

const Profile = () => {
	return (
		<div className="flex flex-col items-center mt-20 mb-16 text-black">
			<DefaultProfile />
			<p className="text-2xl font-bold">{'이우성'}</p>
		</div>
	)
}

export default Profile
