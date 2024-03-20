import { NameMessageType } from '../type'
import { NameMessageInfo } from './EditProfile'

interface NameMessageProps {
	nameStatus: NameMessageType
}
const NameMessage = ({ nameStatus }: NameMessageProps) => {
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
