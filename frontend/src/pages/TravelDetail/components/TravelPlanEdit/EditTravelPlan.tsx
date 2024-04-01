import { useRouter } from "src/hooks/useRouter"
import usePlanStore from "../../store"
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd"
import EditTravelDay from "./EditTravelDay"
import React, { useEffect, useRef, useState } from "react"
import { IoTrashSharp } from "react-icons/io5"
import { LuArrowUpDown } from "react-icons/lu"
import { IDay, IPlace } from "../../type"
import MapSpace from "../MapSpace"
import { useParams } from "react-router-dom"

interface EditTravelPlanProps {
    toggleIsEdit: () => void
}

const EditTravelPlan = ({toggleIsEdit}: EditTravelPlanProps) => {
    const {id} = useParams()
    const router = useRouter()
    const {plan, currentDay, setCurrentDay} = usePlanStore()
    const [selectedDate, setSelectedDate] = useState<string | undefined>('')
    const [visibleDay, setVisibleDay] = useState<number | null>()
    const dayRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([])
    const headerRef = useRef<HTMLDivElement | null>(null)
    const [state, setState] = useState(plan)

    useEffect(() => {
        if (state && state.dayOrder) {
            dayRefs.current = state.dayOrder.map((_, index) => dayRefs.current[index] || React.createRef())
        }
        const checkDayPositions = () => {
            const headerTop = headerRef.current?.getBoundingClientRect().top ?? 240
            const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 424
            
            const visibleDayIndices: number[] = []

            const buffer = 10
            
            dayRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    const dayTop = ref.current.getBoundingClientRect().top
                    const dayBottom = ref.current.getBoundingClientRect().bottom

                    if ((dayTop >= headerTop - buffer && dayTop <= headerBottom + buffer) ||
                        (dayBottom >= headerTop - buffer && dayBottom <= headerBottom + buffer) ||
                        (dayTop <= headerTop - buffer && dayBottom >= headerBottom + buffer)) {
                        visibleDayIndices.push(index + 1)
                    }
                }
            })
            const dayIndex = (visibleDayIndices.length > 0 ? visibleDayIndices[visibleDayIndices.length - 1] : currentDay)

            if (dayIndex && state) {
                setSelectedDate(state.dayOrder[dayIndex - 1])
                setCurrentDay(dayIndex)
            }
            setVisibleDay(dayIndex)
        }

        window.addEventListener('scroll', checkDayPositions)
        checkDayPositions()

        return () => {
            window.removeEventListener('scroll', checkDayPositions)
        }
    }, [state])

    if (!plan || !state || !id) {
        router.routeTo('/notFound')
        return null
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedDate = event.target.value
        setSelectedDate(newSelectedDate)

        const dayIndex = state.dayOrder.findIndex(day => day === newSelectedDate)
        
        const element = dayRefs.current[dayIndex]?.current
        if (element) {
            const headerHeight = headerRef.current?.getBoundingClientRect().bottom ?? 424
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - headerHeight + 1

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
    }

    const handleSave= () => {
        const planDays = state.days
        const dayPlacePairs = Object.keys(planDays).flatMap(date => {
            return planDays[date].placeIds.map(placeId => {
                return {date, spotId: parseInt(placeId)}
            })
        })
        const editedPlan = {
            planId: parseInt(id),
            plans: dayPlacePairs
        }
        console.log(editedPlan)

        usePlanStore.getState().setPlan(state)
        usePlanStore.getState().clearSelectedItems()
        toggleIsEdit()
    }

    const handleDelete = () => {
        const selectedPlaceIds = usePlanStore.getState().selectedPlaceIds

        const updatedDays = Object.keys(state.days).reduce<{[key: string]: IDay}>((acc, dayKey) => {
            const day = state.days[dayKey]
            acc[dayKey] = {...day, placeIds: day.placeIds.filter(id => !selectedPlaceIds.includes(id))}
            return acc
        }, {})

        const updatedPlaces = Object.keys(state.places).reduce<{[key: string]: IPlace}>((acc, placeId) => {
            if (!selectedPlaceIds.includes(placeId)) {
                acc[placeId] = state.places[placeId]
            }
            return acc
        }, {})

        const newState = {
            ...state,
            days: updatedDays,
            places: updatedPlaces
        }
        setState(newState)
    }

    const onDragEnd: OnDragEndResponder = (result) => {
        const {destination, source, draggableId} = result

        // dropped on non-droppable
        if (!destination) {
            return
        }

        // dropped at the same place
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = state.days[source.droppableId]
        const finish = state.days[destination.droppableId]

        if (start === finish) {
            const newPlaceIds = Array.from(start.placeIds)
            newPlaceIds.splice(source.index, 1)
            newPlaceIds.splice(destination.index, 0, draggableId)

            const newDay = {
                ...start,
                placeIds: newPlaceIds
            }

            const newState = {
                ...state,
                days: {
                    ...state.days,
                    [source.droppableId] : newDay
                }
            }

            setState(newState)
            
        } else {
            const startPlaceIds = Array.from(start.placeIds)
            startPlaceIds.splice(source.index, 1)
            const newStart = {
                ...start,
                placeIds: startPlaceIds
            }

            const finishPlaceIds = Array.from(finish.placeIds)
            finishPlaceIds.splice(destination.index, 0, draggableId)
            const newFinish = {
                ...finish,
                placeIds: finishPlaceIds
            }

            const newState = {
                ...state,
                days: {
                    ...state.days,
                    [source.droppableId]: newStart,
                    [destination.droppableId]: newFinish
                }
            }
            setState(newState)
        }
    }

    return (
        <div>
            <div className="sticky top-[60px] z-30" ref={headerRef}>
                <MapSpace day={currentDay} plan={state} />
                <div className="pl-4 pr-6 h-10 flex justify-between items-center bg-white">
                    <div>
                        <span className="text-sm font-semibold mr-2">day {visibleDay ? visibleDay : currentDay}</span>
                        <select
                            className="text-xs font-semibold text-darkGray1"
                            value={selectedDate}
                            onChange={handleDateChange}
                        >
                            {state.dayOrder.map((day, index) => (
                                <option key={index} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <div onClick={handleSave}>
                        <button className="text-blue1 text-xs">save</button>
                    </div>
                </div>
            </div>
            <div className="pb-[336px]">
                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                    <div className="flex flex-col">
                        {state.dayOrder.map((dayId, index) => {
                            const day = state.days[dayId]
                            const places = day.placeIds.map((placeId) => state.places[placeId])

                            return (
                                <div key={index} ref={dayRefs.current[index]}>
                                    <EditTravelDay dayKey={dayId} day={day} places={places} index={index + 1} />
                                </div>
                            )
                        })}
                    </div>
                </DragDropContext>
            </div>
            <div className="fixed bottom-0 h-11 w-full z-20 bg-green3 text-white px-[52px] flex justify-between items-center">
                <button className="flex">
                    <LuArrowUpDown />
                    <span className="text-xs">날짜 이동</span>
                </button>
                <button className="flex" onClick={handleDelete}>
                    <IoTrashSharp />
                    <span className="ml-0.5 text-xs">삭제하기</span>
                </button>
            </div>
        </div>
    )
}

export default EditTravelPlan