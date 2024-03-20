import { NameMessageInfo } from './EditProfile'
import { useNameStatusQuery } from '../query'

interface NameMessageProps {
	name: string
}
const NameMessage = ({ name }: NameMessageProps) => {
	const { nameStatus, isLoading } = useNameStatusQuery(name)

	return (
		<>
			{isLoading || !nameStatus ? (
				<p className={`text-xs text-darkGray1`}>{NameMessageInfo['valid']}</p>
			) : (
				<p
					className={`text-xs text-darkGray1 ${
						nameStatus !== 'valid' && 'text-red'
					}`}
				>
					{NameMessageInfo[nameStatus]}
				</p>
			)}
		</>
	)
}

export default NameMessage
