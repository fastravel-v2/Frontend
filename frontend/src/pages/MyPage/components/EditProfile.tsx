const EditProfile = () => {
	return (
		<form className="flex flex-col">
			<input type="file" name="" id="" />
			<input
				type="text"
				name=""
				id=""
				className="text-2xl font-bold text-center border-b-2 border-lightGray2 "
			/>
			<button
				type="submit"
				className="py-4 mb-3 text-white rounded bg-green1 mt-9"
			>
				수정 완료
			</button>
			<p className="text-xs text-darkGray1">
				한글/영어/숫자/밑줄/띄어쓰기를 사용할 수 있습니다.
			</p>
		</form>
	)
}

export default EditProfile
