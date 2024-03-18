import { Outlet } from 'react-router-dom'
import NavigationHeader from '../NavigationHeader'
import { ContentTypeInfo } from '../../type'

interface IMyPageContentProps {
	headerData: ContentTypeInfo[]
}

const MyPageContent = ({ headerData }: IMyPageContentProps) => {
	return (
		<div className="">
			<NavigationHeader headerData={headerData} />
			<Outlet />
		</div>
	)
}

export default MyPageContent
