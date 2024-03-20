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


  return (
    <WithHeaderLayout headerMenu={headerMenu} headerFunc={headerFunc}>
      <Header name={locationData.name} address={locationData.address} />
      <CarouselComponent images={locationData.depiction} />
      <div className="flex justify-between">
        <LikeButton />
        <AddToPlanButton />
      </div>
      <Description description={locationData.description} />
      <MapComponent lat={Number(locationData.lat)} long={Number(locationData.long)}/>
      <Properties properties={locationData.properties} address={locationData.address}/>
    </WithHeaderLayout>
  )
}

export default LocationDetail