import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMenu, IMenuFunc } from "src/types/layout"
import { getLocationDetail } from "./api"
import { LocationDetailType } from "./type"
import WithHeaderLayout from "src/components/layout/WithHeaderLayout"
import Header from "./components/Header"
import CarouselComponent from "./components/CarouselComponent"
import LikeButton from "./components/LikeButton"
import AddToPlanButton from "./components/AddToPlanButton"
import Description from "./components/Description"
import Properties from "./components/Properties"
import MapComponent from "./components/MapComponent"
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "src/hooks/useRouter"

const LocationDetail = () => {
  const [locationData, setLocationData] = useState<LocationDetailType | undefined>(undefined)
  const {id} = useParams()
  const router = useRouter()

  const refetch = async () => {
    if (id) {
      const fetchedData = await getLocationDetail(id)
      setLocationData(fetchedData)
    }
  }

  useEffect(() => {
    refetch()
  }, [id])

  const headerMenu: IMenu = {
    left: <FaArrowLeft />,
    center: null,
    right: null
  }

  const headerFunc: IMenuFunc = {
    left_func: undefined,
    right_func: undefined
  }

  if (!locationData) {
    router.routeTo('/notFound')
    return
  }

  const { address, tel, credit_card, parking, open_time, pets_available, baby_equipment_rental, closed_for_the_day, play_area_for_children, best_menu, rest_date, time_available, sale_items, take_out, fair_day, smoking_section_available, reservation, fee, occupancy, age_limit, scale, start_date, end_date, show_time, parking_fee, travel_time, discount, age_available, seasons, time_required, program } = locationData
  const properties = { address, tel, credit_card, parking, open_time, pets_available, baby_equipment_rental, closed_for_the_day, play_area_for_children, best_menu, rest_date, time_available, sale_items, take_out, fair_day, smoking_section_available, reservation, fee, occupancy, age_limit, scale, start_date, end_date, show_time, parking_fee, travel_time, discount, age_available, seasons, time_required, program }

  return (
    <WithHeaderLayout headerMenu={headerMenu} headerFunc={headerFunc}>
      <Header name={locationData.name} address={locationData.address} />
      {locationData.image_urls.length
        ? locationData.image_urls.length === 1
          ? <div className="flex justify-center">
              <div className='relative rounded-xl h-44 w-full'>
                <div className='h-5 absolute top-2 right-4 px-3 z-10 rounded-full text-white bg-darkGray1 flex justify-center items-center'>
                    <p className='text-xs font-light '>{1} / {1}</p>
                </div>
                <img src={locationData.image_urls[0]} alt={`image number ${1}`} className='rounded-xl px-1 h-44 w-80' /> 
              </div>
            </div>
          : <div className="flex justify-center"><CarouselComponent images={locationData.image_urls} /></div>
        : <div className="flex justify-center"><div className="h-44 min-h-44 w-full bg-lightGray3 flex justify-center items-center"><span className="text-darkGray3">No image...</span></div></div>
      }
      <div className="flex justify-between w-full gap-4">
        <LikeButton />
        <AddToPlanButton />
      </div>
      <Description description={locationData.description} />
      <MapComponent lat={Number(locationData.lat)} long={Number(locationData.long)}/>
      <Properties properties={properties}/>
    </WithHeaderLayout>
  )
}

export default LocationDetail