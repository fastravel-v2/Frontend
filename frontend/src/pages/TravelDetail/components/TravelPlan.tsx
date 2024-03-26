import { useRouter } from "src/hooks/useRouter"
import usePlanStore from "../store"
import TravelDay from "./TravelDay"
import React, { useEffect, useRef, useState } from "react"

interface TravelPlanProps {
    toggleIsEdit: () => void
}

const TravelPlan = ({toggleIsEdit}: TravelPlanProps) => {
    const router = useRouter()
    const plan = usePlanStore.getState().plan
    const [selectedDate, setSelectedDate] = useState<string | undefined>('')
    const [visibleDay, setVisibleDay] = useState<number | null>()
    const dayRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([])
    const headerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (plan && plan.dayOrder) {
            dayRefs.current = plan?.dayOrder.map((_, index) => dayRefs.current[index] || React.createRef())
        }
    }, [plan])

    useEffect(() => {
        const checkDayPositions = () => {
            const headerTop = headerRef.current?.getBoundingClientRect().top ?? 0
            const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0

            const visibleDayIndices: number[] = []

            dayRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const dayTop = ref.current.getBoundingClientRect().top
                    const dayBottom = ref.current.getBoundingClientRect().bottom

                    if ((dayTop >= headerTop && dayTop <= headerBottom) ||
                        (dayBottom >= headerTop && dayBottom <= headerBottom) ||
                        (dayTop <= headerTop && dayBottom >= headerBottom)) {
                        visibleDayIndices.push(index + 1)
                    }
                }
            })
            const dayIndex = (visibleDayIndices.length > 0 ? visibleDayIndices[visibleDayIndices.length - 1] : null)
            
            if (dayIndex) {
                setSelectedDate(plan?.dayOrder[dayIndex - 1])
            }
            setVisibleDay(dayIndex)
        }

        window.addEventListener('scroll', checkDayPositions)
        checkDayPositions()

        return () => {
            window.removeEventListener('scroll', checkDayPositions)
        }
    }, [plan])

    if (!plan) {
        router.routeTo('/notFound')
        return null
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedDate = event.target.value
        setSelectedDate(newSelectedDate)
        
        const dayIndex = plan.dayOrder.findIndex(day => day === newSelectedDate)

        const element = dayRefs.current[dayIndex]?.current
        if (element) {
            const headerHeight = 100
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - headerHeight + 1

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div>
            <div className="sticky top-[60px] z-30" ref={headerRef}>
                <div className="pl-4 pr-6 h-10 flex justify-between items-center bg-white">
                    <div>
                        <span className="text-sm font-semibold mr-2">day {visibleDay}</span>
                        <select 
                            className="text-xs font-semibold text-darkGray1"
                            defaultValue={selectedDate}
                            value={selectedDate}
                            onChange={handleDateChange}
                        >
                            {plan.dayOrder.map((day, index) => (
                                <option key={index} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <div onClick={toggleIsEdit}>
                        <button className="text-blue1 text-xs">edit</button>
                    </div>
                </div>
            </div>
            <div className="pb-[728px]">
                {plan.dayOrder.map((day, index) => (
                    <div key={index} ref={dayRefs.current[index]} data-day-index={index+1}>
                        <TravelDay day={day} index={index + 1} />
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default TravelPlan