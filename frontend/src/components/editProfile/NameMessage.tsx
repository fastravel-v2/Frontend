import { NameMessageType } from '../../pages/MyPage/type'
import { NameMessageInfo } from './EditProfile'

interface NameMessageProps {
	nameStatus: NameMessageType
}
const NameMessage = ({ nameStatus }: NameMessageProps) => {
	return (
		<>
			{nameStatus !== 'initial' && (
				<p
					className={`mt-2 text-xs text-darkGray1 
			${
				nameStatus === 'valid'
					? 'text-green1'
					: nameStatus === 'loading'
					? 'text-darkGray1'
					: 'text-red'
			}
			
		}`}
				>
					{NameMessageInfo[nameStatus]}
				</p>
			)}
		</>
	)
}

export default NameMessage
