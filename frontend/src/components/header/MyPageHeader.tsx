import { IMenu, IMenuFunc } from 'src/types/layout'

export interface IMyPageHeaderProp {
	menu: IMenu
	func: IMenuFunc
}
const MyPageHeader = ({ menu, func }: IMyPageHeaderProp) => {
	const { left, center, right } = menu
	const { left_func, right_func } = func

	return (
		<div className="fixed top-0 z-10 flex items-center justify-between w-full h-20 px-5 bg-transparent bg-white -left-0">
			{left ? (
				<div onClick={left_func}>{left}</div>
			) : (
				<div className="invisible">{right}</div>
			)}
			<div className="text-lg font-bold">{center}</div>
			{right ? (
				<div onClick={right_func}>{right}</div>
			) : (
				<div className="invisible">{left}</div>
			)}
		</div>
	)
}

export default MyPageHeader
