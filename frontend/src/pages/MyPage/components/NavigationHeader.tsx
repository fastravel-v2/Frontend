import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useRouter } from 'src/hooks/useRouter'
import { ContentTypeInfo } from '../type'

interface NavigationHeaderProps {
	headerData: ContentTypeInfo[]
}

const NavigationHeader = ({ headerData }: NavigationHeaderProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number>()
	const { currentPath } = useRouter()

	useEffect(() => {
		// bucket/write/{children}으로 안들어왔을 경우
		if (selectedIndex === undefined) {
			setSelectedIndex(0)
			return
		}
	}, [selectedIndex])

	useEffect(() => {
		headerData.forEach((item, index) => {
			if (currentPath.includes(item.path)) {
				console.log(currentPath + ' ' + item.path)
				setSelectedIndex(index)
			}
		})
	}, [currentPath])

	return (
		<ul
			className={`flex justify-around w-full py-1 pb-7 sticky top-20 bg-white`}
		>
			{headerData.map((headerItem, index) => {
				return (
					<li key={`header-${index}`} className={`w-20 relative`}>
						<NavLink
							to={headerItem.path}
							className={
								'inline-block w-full text-center ' +
								(selectedIndex === index
									? ' text-black font-bold'
									: ' text-lightGray2')
							}
						>
							{headerItem.name}
						</NavLink>
						{selectedIndex === index && (
							<motion.div
								layoutId="underline"
								className="absolute h-[2px] -bottom-1 w-full bg-black"
							/>
						)}
					</li>
				)
			})}
		</ul>
	)
}

export default NavigationHeader
