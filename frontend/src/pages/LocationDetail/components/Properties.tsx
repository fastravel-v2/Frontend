import { LocationDetailPropertiesType } from "../type"
import PropertyItem from "./PropertyItem"
import { keyToString } from "../util"

interface PropertiesProps {
    properties: LocationDetailPropertiesType;
}

const Properties = ({properties}:PropertiesProps) => {
    return (
        <div className="mt-4 mb-5">
            {Object.entries(properties).map(([key, value]) => {
                if (value) {
                    return <PropertyItem key={key} title={keyToString(key)} content={value} />
                }
                return null
            })}
        </div>
    )
}

export default Properties