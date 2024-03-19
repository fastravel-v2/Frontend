import { useParams } from "react-router-dom"
import sampleData from "./sample_data"
import DefaultLayout from "src/components/layout/DefaultLayout"
import Header from "./components/Header"
import CarouselComponent from "./components/CarouselComponent"
import LikeButton from "./components/LikeButton"
import AddToPlanButton from "./components/AddToPlanButton"
import Description from "./components/Description"
import Properties from "./components/Properties"

const LocationDetail = () => {
  const locationId = useParams()

  console.log(locationId.id)


  return (
    <DefaultLayout>
      <Header name={sampleData.name} address={sampleData.address} />
      <CarouselComponent images={sampleData.depiction} />
      <div className="flex justify-between">
        <LikeButton />
        <AddToPlanButton />
      </div>
      <Description description={sampleData.description} />
      <Properties properties={sampleData.properties} address={sampleData.address}/>
    </DefaultLayout>
  )
}

export default LocationDetail