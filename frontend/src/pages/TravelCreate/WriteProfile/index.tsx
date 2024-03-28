import EditProfile from 'src/components/editProfile/EditProfile'

const WriteProfile = () => {
	return (
		<div>
			<EditProfile
				type="travel"
				profileName=""
				profileImage={null}
				isLoading={false}
			/>
		</div>
	)
}

export default WriteProfile
