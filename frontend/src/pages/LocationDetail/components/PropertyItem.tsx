import React from "react";

interface PropertyItemProps {
    title: string;
    content: string;
}

const PropertyItem: React.FC<PropertyItemProps> = ({title, content}) => {
  return (
    <div className="flex">
        <p className="text-sm font-medium min-w-28 max-w-28 mr-2 break-all">{title}</p>
        <p className="text-sm break-all">{content}</p>
    </div>
  )
}

export default PropertyItem