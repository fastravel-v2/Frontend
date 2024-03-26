import { useRouter } from "src/hooks/useRouter"
import usePlanStore from "../../store"
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd"
import EditTravelDay from "./EditTravelDay"
import React, { useState } from "react"
import { IoTrashSharp } from "react-icons/io5"
import { LuArrowUpDown } from "react-icons/lu"
import { IDay, IPlace } from "../../type"

interface EditTravelPlanProps {
    toggleIsEdit: () => void
}

const EditTravelPlan = ({toggleIsEdit}: EditTravelPlanProps) => {
    const router = useRouter()
    const plan = usePlanStore.getState().plan
    const [selectedDay, setSelectedDay] = useState(1)
    const [selectedDate, setSelectedDate] = useState(plan?.dayOrder[0])
    const [state, setState] = useState(plan)

    if (!plan || !state) {
        router.routeTo('/notFound')
        return null
    }

    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSelectedDate = event.target.value
        setSelectedDate(newSelectedDate)

        const dayIndex = plan.dayOrder.findIndex(day => day === newSelectedDate)
        setSelectedDay(dayIndex + 1)
    }

    const handleSave= () => {
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
            <div className="sticky top-[60px] z-30">
                <div className="pl-4 pr-6 h-10 flex justify-between items-center bg-white">
                    <div>
                        <span className="text-sm font-semibold mr-2">day {selectedDay}</span>
                        <select
                            className="text-xs font-semibold text-darkGray1"
                            value={selectedDate}
                            onChange={handleDateChange}
                        >
                            {plan.dayOrder.map((day, index) => (
                                <option key={index} value={day}>{day}</option>
                            ))}
                        </select>
                    </div>
                    <div onClick={handleSave}>
                        <button className="text-blue1 text-xs">save</button>
                    </div>
                </div>
            </div>
            <div className="pb-[728px]">
                <DragDropContext
                    onDragEnd={onDragEnd}
                >
                    <div className="flex flex-col">
                        {state.dayOrder.map((dayId, index) => {
                            const day = state.days[dayId]
                            const places = day.placeIds.map((placeId) => state.places[placeId])
                            
                            return <EditTravelDay key={dayId} dayKey={dayId} day={day} places={places} index={index + 1} />
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