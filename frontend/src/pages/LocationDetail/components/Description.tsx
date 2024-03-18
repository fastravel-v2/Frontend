import React from "react"

interface DescriptionProps {
  description: string;
}

const Description: React.FC<DescriptionProps> = ({description}) => {
  return (
    <div className="mt-4 mb-3">
      <h3 className="text-base font-semibold">상세정보</h3>
      <hr className="h-px mt-2 mb-3 bg-black" />
      <div>{description}</div>
    </div>
  )
}

export default Description