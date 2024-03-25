const TravelDayEmptyItem = () => {

    return (
        <div className="flex relative h-[188px]">
            <div className="bg-lightGray1 min-w-px h-full absolute left-9"></div>
            <div className="z-10 absolute left-[26px] top-[18px] h-5 w-5 bg-green3 rounded-full flex justify-center items-center text-white text-xs font-semibold"></div>
            <div className="ml-[60px] mt-2 border w-full h-[168px] border-lightGray3 rounded">
                    <div className="mt-1.5 ml-3 mb-1 font-semibold">{'test'}</div>
                    <div className="ml-3 text-xs text-darkGray1">{'test2'}</div>
            </div>
        </div>
    )
}

export default TravelDayEmptyItem