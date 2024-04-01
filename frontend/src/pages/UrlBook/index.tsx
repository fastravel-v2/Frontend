import UrlList from './components/UrlList'
import UrlAddBtn from './components/UrlAddBtn'
import UrlSendButton from './components/UrlSendBtn'
import UrlDeleteBtn from './components/UrlDeleteBtn'
import { useUrlStore } from './store' // useUrlStore를 직접 사용합니다.
import DummyDataInjector from './dummyData/DummyDataInjector '

export const UrlBook = () => {
	// useUrlStore 훅에서 urls 상태를 가져옵니다.
	const { urls } = useUrlStore()
	// 체크된 URL의 개수를 계산합니다.
	const checkedCount = urls.filter((url) => url.checked).length

	return (
		<div className="min-h-screen bg-gray-100">
			<DummyDataInjector />
			<UrlAddBtn />
			<div className="flex justify-between mt-2">
				{/* 조건부 렌더링: 체크된 URL이 하나 이상 있을 때만 UrlSendButton과 UrlDeleteBtn을 렌더링합니다. */}
				{checkedCount > 0 ? (
					<>
						<UrlSendButton />
						<UrlDeleteBtn />
					</>
				) : (
					<div className="flex justify-between items-center pl-4 pr-4">
						<div className="text-gray-500 font-medium rounded-md mt-2">
							URL을 선택해주세요!
						</div>
					</div>
				)}
			</div>
			<div className="p-4">
				<UrlList />
			</div>
		</div>
	)
}
