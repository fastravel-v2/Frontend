import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ITravelDetail } from "./type"
import { getTravelDetail } from "./api"
import { IMenu, IMenuFunc } from "src/types/layout"
import { FaArrowLeft } from "react-icons/fa6"
import Header from "./components/Header"
import TravelPlan from "./components/TravelPlan"
import DefaultHeader from "src/components/header/DefaultHeader"

const TravelDetail = () => {
  const [travelData, setTravelData] = useState<ITravelDetail | undefined>(undefined)
  const {id} = useParams()

  const refetch =async () => {
    if (id) {
      const fetchedData = await getTravelDetail(id)
      setTravelData(fetchedData)
    }
  }

  useEffect(() => {
    refetch()
  }, [id])

  const headerMenu: IMenu = {
    left: <FaArrowLeft />,
    center: null,
    right: null,
  }

  const headerFunc: IMenuFunc = {
    left_func: undefined,
    right_func: undefined
  }

  if (!travelData) {
    return null
  }

  return (
    <div>
      <DefaultHeader menu={headerMenu} func={headerFunc} />
      <Header headerInfo={travelData.info} />
      <TravelPlan />
    </div>
  )
}

export default TravelDetail