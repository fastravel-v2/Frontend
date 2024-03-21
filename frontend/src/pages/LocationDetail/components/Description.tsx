import { useState, useEffect, useRef } from "react"

interface DescriptionProps {
  description: string;
}

const Description= ({description}: DescriptionProps) => {
  const [isShowAll, setIsShowAll] = useState(false)
  const [isLongText, setIsLongText] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (textRef.current) {
      const height = textRef.current.clientHeight
      if (height > 144) {
        setIsLongText(true)
      } else setIsLongText(false)
    }
  }, [description])

  const toggleShowAll = () => {
    setIsShowAll(!isShowAll)
  }
  
  return (
    <div className="mt-4 mb-3">
      <h3 className="text-base font-semibold">상세정보</h3>
      <hr className="h-px mt-2 mb-3 bg-black" />
      <div ref={textRef} className={`overflow-hidden mb-1 ${isShowAll || !isLongText ? '' : 'max-h-36'}`} >
        {description}
      </div>
      {isLongText && <div className="flex justify-end">
        <button onClick={toggleShowAll} className="text-sm font-medium text-blue1">
          {isShowAll ? '간략히' : '내용 더보기 + '}
        </button>
      </div>}
    </div>
  )
}

export default Description