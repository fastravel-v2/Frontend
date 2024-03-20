interface PropertyItemProps {
    title: string;
    content: string;
}

const PropertyItem = ({title, content}: PropertyItemProps) => {
  return (
    <div className="flex mb-2">
        <p className="text-sm font-medium min-w-28 max-w-28 mr-2 break-all">{title}</p>
        <p className="text-sm break-all">{content}</p>
    </div>
  )
}

export default PropertyItem