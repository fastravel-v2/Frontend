import React from "react"
import { LocationDetailPropertiesType } from "../type";

interface HeaderProps {
  name: string;
  properties: LocationDetailPropertiesType;
}

const Header: React.FC<HeaderProps> = ({name, properties}) => {
  return (
    <div className="mt-6 ml-1 mb-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="mb-1 text-darkGray3">메모 추가</div>
      <div className="mb-1 text-xs font-semibold">like count</div>
      {properties?.address 
      ? <div className="text-xs font-semibold">{properties.address}</div> 
      : null}
    </div>
  )
}

export default Header