import { useEffect, useState } from 'react'
import Experience from '../../data/experience'

interface ExperienceFormProps {
    setExperienceData: (data: Experience) => void
    data: Experience
}

const ExperienceForm = ({ setExperienceData, data }: ExperienceFormProps) => {
    const [companyName, setCompanyName] = useState(data.companyName)
    const [positionTitle, setPositionTitle] = useState(data.positionTitle)
    const [startDate, setStartDate] = useState(data.startDate)
    const [endDate, setEndDate] = useState(data.endDate)
    const [location, setLocation] = useState(data.location)
    const [description, setDescription] = useState(data.description)

    useEffect(() => {
        const newData = new Experience(
            companyName,
            positionTitle,
            startDate,
            endDate,
            location,
            description
        )

        setExperienceData(newData)
    }, [companyName, positionTitle, startDate, endDate, location, description])

    return (
        <div className="rounded-b-lg bg-neutral-200 font-semibold">
            <form className="flex flex-col px-2 py-2">
                <label htmlFor="companyName" className="py-1 font-semibold">
                    Company Name
                </label>
                <input
                    type="text"
                    id="companyName"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={companyName}
                    onChange={(e) => {
                        setCompanyName(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="positionTitle" className="py-1 font-semibold">
                    Position Title
                </label>
                <input
                    type="text"
                    id="positionTitle"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={positionTitle}
                    onChange={(e) => {
                        setPositionTitle(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="startDate" className="py-1 font-semibold">
                    Start Date
                </label>
                <input
                    type="text"
                    id="startDate"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="endDate" className="py-1 font-semibold">
                    End Date
                </label>
                <input
                    type="text"
                    id="endDate"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="location" className="py-1 font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="description" className="py-1 font-semibold">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    className="bg-netrual-50 mx-5 mb-5 rounded-md px-2 py-1"
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value)
                        handleDataChange()
                    }}
                ></input>
            </form>
        </div>
    )
}

export default ExperienceForm
