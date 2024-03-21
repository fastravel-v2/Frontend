import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IMenu, IMenuFunc } from "src/types/layout"
import { getLocationDetail } from "./api"
import { LocationDetailType } from "./type"
import WithHeaderLayout from "src/components/layout/WithHeaderLayout"
import Header from "./components/Header"
// import CarouselComponent from "./components/CarouselComponent"
import LikeButton from "./components/LikeButton"
import AddToPlanButton from "./components/AddToPlanButton"
import Description from "./components/Description"
import Properties from "./components/Properties"
import MapComponent from "./components/MapComponent"
import { FaArrowLeft } from "react-icons/fa6";

const LocationDetail = () => {
  const [locationData, setLocationData] = useState<LocationDetailType | undefined>(undefined)
  const {id} = useParams()

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
    return null
  }

  const { tel, creditCard, parking, openTime, petsAvailable, babyEquipmentRental, closedForTheDay, playAreaForChildren, bestMenu, restDate, timeAvailable, saleItems, takeOut, fairDay, smokingSectionAvailable, reservation, fee, occupancy, ageLimit, scale, startDate, endDate, showTime, parkingFee, travelTime, discount, ageAvailable, seasons, timeRequired, program } = locationData
  const properties = { tel, creditCard, parking, openTime, petsAvailable, babyEquipmentRental, closedForTheDay, playAreaForChildren, bestMenu, restDate, timeAvailable, saleItems, takeOut, fairDay, smokingSectionAvailable, reservation, fee, occupancy, ageLimit, scale, startDate, endDate, showTime, parkingFee, travelTime, discount, ageAvailable, seasons, timeRequired, program }

  return (
    <WithHeaderLayout headerMenu={headerMenu} headerFunc={headerFunc}>
      <Header name={locationData.name} address={locationData.address} />
      {/* {locationData.image_url.length > 1
        ? <CarouselComponent images={locationData.image_url} />
        : locationData.image_url.length 
          ? <div className='relative rounded-xl px-1 h-44 w-80'>
              <div className='h-5 absolute top-2 right-4 px-3 z-10 rounded-full text-white bg-darkGray1 flex justify-center items-center'>
                  <p className='text-xs font-light '>{1} / {1}</p>
              </div>
              <img src={locationData.image_url[0]} alt={`image number ${1}`} className='rounded-xl px-1 h-44 w-80' /> 
          </div>
          : <div></div>
      } */}
      <div className='relative rounded-xl px-1 h-44 w-80'>
        <div className='h-5 absolute top-2 right-4 px-3 z-10 rounded-full text-white bg-darkGray1 flex justify-center items-center'>
            <p className='text-xs font-light '>{1} / {1}</p>
        </div>
        <img src={locationData.image_url} alt={`image number ${1}`} className='rounded-xl px-1 h-44 w-80' /> 
      </div>
      <div className="flex justify-between">
        <LikeButton />
        <AddToPlanButton />
      </div>
      <Description description={locationData.description} />
      <MapComponent lat={Number(locationData.lat)} long={Number(locationData.long)}/>
      <Properties properties={properties} address={locationData.address}/>
    </WithHeaderLayout>
  )
}

export default LocationDetail