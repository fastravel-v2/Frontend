import { useEffect } from 'react'
import { useCurrentNameStatus } from '../hooks/useCurrentNameStatus'
import { NameMessageInfo } from './EditProfile'

interface NameMessageProps {
	name: string
}
const NameMessage = ({ name }: NameMessageProps) => {
	const nameStatus = useCurrentNameStatus(name)

	useEffect(() => {
		console.log(nameStatus)
	}, [name])

	return (
		<p
			className={`text-xs text-darkGray1 ${
				nameStatus !== 'valid' && 'text-red'
			}`}
		>
			{NameMessageInfo[nameStatus]}
		</p>
	)
}

export default NameMessage
