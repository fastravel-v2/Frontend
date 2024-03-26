import { DefaultLocation } from 'src/assets/svgs'
import { useSearchCity } from '../store'

// Todo: 도시 정보를 이용해서 검색에 활용 예정, Naver 지역 API를 사용하게 될 수도 있다.
const describeCityInfo = {
	국내: [] as string[],
	'가평,양평': ['가평', '양평'],
	'강릉,속초': ['강릉', '속초'],
	경주: ['경주'],
	부산: ['부산'],
	'여수,순천': ['여수', '순천'],
	인천: ['인천'],
	전주: ['전주'],
	제주: ['제주'],
	'춘천,홍천': ['춘천', '홍천'],
	태안: ['태안'],
	'통영,거제,남해': ['통영', '거제', '남해'],
	'포항,안동': ['포항', '안동'],
}
const citySearchCategory = Object.values(describeCityInfo)

const SearchResult = () => {
	const { searchedCities } = useSearchCity()

	return (
		<section className="mt-16">
			<h1 className="mt-6 text-2xl font-bold mb-7">도시 선택하기</h1>
			<ul className="flex flex-col gap-4">
				{searchedCities.length === 0 &&
					citySearchCategory.map((cities, index) => {
						return (
							<li key={`city-category-${index}`} className="flex items-center">
								<div className="flex grow">
									<DefaultLocation className="mr-4 rounded-full w-14 h-14" />
									<div className="flex flex-col justify-center">
										<p className="flex gap-2">
											{cities.length === 0 ? (
												<p key={`city-${0}`}>국내</p>
											) : (
												cities.map((city, index) => (
													<>
														<p
															key={`city-${index}`}
															className={`inline-block relative ${
																index !== cities.length - 1 &&
																'after:block after:content-middleDot  after:w-1  after:absolute after:left-full after:translate-y-1/2 after:translate-x-1/2  after:bottom-1/2 after:z-20 after-align-middle'
															}`}
														>
															{city}
														</p>
													</>
												))
											)}
										</p>
										<p>도시 설명</p>
									</div>
								</div>
								<button>선택</button>
							</li>
						)
					})}
			</ul>
		</section>
	)
}

export default SearchResult
