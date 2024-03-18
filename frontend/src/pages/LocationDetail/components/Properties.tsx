import React from "react"
import { LocationDetailPropertiesType } from "../type"
import PropertyItem from "./PropertyItem"

interface PropertiesProps {
    properties: LocationDetailPropertiesType
}

const Properties: React.FC<PropertiesProps> = ({properties}) => {
    return (
        <div>
            {Object.entries(properties).map(([key, value]) => {
                if (value) {
                    return <PropertyItem key={key} title={key} content={value} />
                }
                return null
            })}
        </div>
    )
}

export default Properties