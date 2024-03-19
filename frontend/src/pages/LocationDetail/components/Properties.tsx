import React from "react"
import { LocationDetailPropertiesType } from "../type"
import PropertyItem from "./PropertyItem"
import { keyToString } from "../util"

interface PropertiesProps {
    properties: LocationDetailPropertiesType
}

const Properties: React.FC<PropertiesProps> = ({properties}) => {
    return (
        <div className="mb-5">
            {Object.entries(properties).map(([key, value]) => {
                if (value && key !== "location" && key !== "category") {
                    return <PropertyItem key={key} title={keyToString(key)} content={value} />
                }
                return null
            })}
        </div>
    )
}

export default Properties