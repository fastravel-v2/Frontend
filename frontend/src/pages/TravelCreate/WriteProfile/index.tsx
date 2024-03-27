import EditProfile from 'src/components/editProfile/EditProfile'

const WriteProfile = () => {
	return (
		<form>
			<EditProfile
				type="travel"
				profileName=""
				profileImage={null}
				isLoading={false}
			/>
		</form>
	)
}

export default WriteProfile
