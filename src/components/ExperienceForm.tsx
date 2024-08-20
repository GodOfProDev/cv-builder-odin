import { useState } from 'react'

const ExperienceForm = () => {
    const [companyName, setCompanyName] = useState('')
    const [positionTitle, setPositionTitle] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')

    return (
        <div className="rounded-b-lg bg-neutral-200 font-semibold">
            <form className="flex flex-col px-2 py-2">
                <label htmlFor="companyName" className="py-1 font-semibold">
                    Company Name
                </label>
                <input
                    type="text"
                    id="companyName"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => {
                        setCompanyName(e.target.value)
                    }}
                ></input>
                <label htmlFor="positionTitle" className="py-1 font-semibold">
                    Position Title
                </label>
                <input
                    type="text"
                    id="positionTitle"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => setPositionTitle(e.target.value)}
                ></input>
                <label htmlFor="startDate" className="py-1 font-semibold">
                    Start Date
                </label>
                <input
                    type="text"
                    id="startDate"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => setStartDate(e.target.value)}
                ></input>
                <label htmlFor="endDate" className="py-1 font-semibold">
                    End Date
                </label>
                <input
                    type="text"
                    id="endDate"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => setEndDate(e.target.value)}
                ></input>
                <label htmlFor="location" className="py-1 font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => setLocation(e.target.value)}
                ></input>
                <label htmlFor="description" className="py-1 font-semibold">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    className="bg-netrual-50 mx-5 mb-5 rounded-md py-1"
                    onChange={(e) => setDescription(e.target.value)}
                ></input>
            </form>
        </div>
    )
}

export default ExperienceForm
