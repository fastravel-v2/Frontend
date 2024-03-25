// src/pages/Chat/dummy/ChatDummyData.ts

export interface ChatMessage {
	id: number
	sender: string
	content: string
	profileImage: string
	timestamp: string
	type: string // 'type' 속성 추가
}

export const chatDummyData: ChatMessage[] = [
	{
		id: 1,
		sender: 'User1',
		content:
			'여행을 좋아한다면 추천하는 장소! 여행을 좋아한다면 추천하는 장소! 여행을 좋아한다면 추천하는 장소!',
		profileImage: 'chiikawa.png',
		timestamp: '오후 12:12',
		type: 'text',
	},
	{
		id: 2,
		sender: 'User1',
		content: '사진을 보여드릴게요.',
		profileImage: 'chiikawa.png',
		timestamp: '오후 12:15',
		type: 'text',
	},
	{
		id: 3,
		sender: 'User',
		content: '사진!!',
		profileImage: 'chiikawa.png',
		timestamp: '오후 12:15',
		type: 'text',
	},
	{
		id: 4,
		sender: 'User',
		content: '사진!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
		profileImage: 'chiikawa.png',
		timestamp: '오후 12:15',
		type: 'text',
	},
	{
		id: 5,
		sender: 'User1',
		content: 'image-url-here',
		profileImage: 'chiikawa.png',
		timestamp: '오후 12:15',
		type: 'image',
	},
	{
		id: 6,
		sender: 'User2',
		content: '아따 마 좋네요.',
		profileImage: 'hachiware.png',
		timestamp: '오후 12:20',
		type: 'text',
	},
	{
		id: 7,
		sender: 'User2',
		content: '함',
		profileImage: 'hachiware.png',
		timestamp: '오후 12:20',
		type: 'text',
	},
	{
		id: 8,
		sender: 'User2',
		content: '가보겠심다.',
		profileImage: 'hachiware.png',
		timestamp: '오후 12:21',
		type: 'text',
	},
	{
		id: 9,
		sender: 'User',
		content: 'audio-url-here',
		profileImage: 'user.jpg',
		timestamp: '오후 12:21',
		type: 'audio',
	},
	{
		id: 10,
		sender: 'User',
		content: '야이야이야 야이야이야',
		profileImage: 'User.jpg',
		timestamp: '오후 12:22',
		type: 'text',
	},
	{
		id: 11,
		sender: 'User1',
		content: '꼭 가 당장 가',
		profileImage: 'chiikawa.png',
		timestamp: '오후 12:24',
		type: 'text',
	},
	{
		id: 12,
		sender: 'User',
		content: 'https://m.blog.naver.com/qkrdbwjd1717/221637966057',
		profileImage: 'User.jpg',
		timestamp: '오후 12:30',
		type: 'text',
	},
	{
		id: 13,
		sender: 'User',
		content: '텍스트 텍스트',
		profileImage: 'User.jpg',
		timestamp: '오후 12:31',
		type: ' text',
	},
	{
		id: 14,
		sender: 'User',
		content: '감사합니다! 방문해볼게요 :)',
		profileImage: 'User.jpg',
		timestamp: '오후 12:31',
		type: 'text',
	},
]

export default chatDummyData
