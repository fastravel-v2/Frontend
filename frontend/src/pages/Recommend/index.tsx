import DefaultLayout from 'src/components/layout/DefaultLayout'
import RecommendList from './component/RecommendList'

const Recommend = () => {
	return (
		<DefaultLayout>
			<h1 className="mt-16 mt-20 text-3xl font-bold">
				어떤 여행을
				<br />
				가고 싶으신가요?
			</h1>
			<h2 className="text-sm text-darkGray1">
				취향과 비슷한 여행지를 추천 받을 수 있어요.
				<br />
				마음에 드는 콘텐츠를 선택해주세요:&#41;
			</h2>
			{/* 한 종류 당 1라인 씩 보여줄지, 다 섞어서 한번에 보여줄지 모두 대비해서 개발 */}
			<RecommendList />

			<button className="absolute py-4 bottom-6 w-[calc(100%-40px)] text-white rounded bottom bottompy-3 bg-green1">
				선택 완료
			</button>
		</DefaultLayout>
	)
}

export default Recommend
