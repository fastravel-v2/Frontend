import { cityInfo } from "src/utility/constants/city";

interface HeaderProps {
    headerInfo: {
        name: string;
        profileImage: string | null;
        startDate: string;
        endDate: string;
        cities: number[];
    }
}

const Header = ({headerInfo}: HeaderProps) => {
    function getCityNameById(cityId: number): string | undefined {
        return cityInfo[cityId.toString() as keyof typeof cityInfo]?.name
    }

    return (
        <div className="mt-20 mb-6 px-5">
            <div className="flex justify-between mb-2">
                <div>
                    <div className="text-xl font-bold mb-2">{headerInfo.name}</div>
                    <div className="text-xs text-darkGray3 mb-2">{headerInfo.startDate} ~ {headerInfo.endDate}</div>
                    <div className="flex flex-wrap">
                        {headerInfo.cities.map((city, index) => (
                            <div className="mr-2 py-1 px-3 rounded-full text-xs font-semibold bg-lightGray3" key={index}>
                                {getCityNameById(city) || 'Unknown City'}
                            </div>
                        ))}
                    </div>
                </div>
                {headerInfo.profileImage && <div className="mt-1 mr-1 h-20 w-20 rounded-full">
                    <img src={headerInfo.profileImage} alt="" className="w-full h-full rounded-full" />
                </div>}
            </div>
        </div>
    )
}

export default Header