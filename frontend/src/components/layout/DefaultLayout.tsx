import { ReactNode } from 'react'

interface IDefaultLayoutProps {
	children: ReactNode
}

const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
	return (
		<div className="flex h-screen ">
			{/* 컨텐츠가 많아짐에 따라 width를 넘어가는 문제 해결을 위한 max-width 지정 */}
			<section className="flex flex-col max-w-full px-5 grow">
				{children}
			</section>
		</div>
	)
}

export default DefaultLayout
