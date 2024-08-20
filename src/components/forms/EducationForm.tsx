import { useState } from 'react'
import Education from '../../data/education'
import { exampleEducationData } from '../../data/exampleData'

interface EducationFormProps {
    setEducationData: (data: Education) => void
}

const exampleData = exampleEducationData

const EducationForm = ({ setEducationData }: EducationFormProps) => {
    const [school, setSchool] = useState(exampleData.school)
    const [degree, setDegree] = useState(exampleData.degree)
    const [startDate, setStartDate] = useState(exampleData.startDate)
    const [endDate, setEndDate] = useState(exampleData.endDate)
    const [location, setLocation] = useState(exampleData.location)

    const handleDataChange = () => {
        const newData = new Education(
            school,
            degree,
            startDate,
            endDate,
            location
        )

        setEducationData(newData)
    }

    return (
        <div className="rounded-lg bg-neutral-200 font-semibold">
            <form className="flex flex-col px-2 py-2">
                <label htmlFor="school" className="py-1 font-semibold">
                    School
                </label>
                <input
                    type="text"
                    id="school"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={school}
                    onChange={(e) => {
                        setSchool(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="degree" className="py-1 font-semibold">
                    Degree
                </label>
                <input
                    type="text"
                    id="degree"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={degree}
                    onChange={(e) => {
                        setDegree(e.target.value)
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
                    className="bg-netrual-50 mx-5 mb-5 rounded-md px-2 py-1"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                        handleDataChange()
                    }}
                ></input>
            </form>
        </div>
    )
}

export default EducationForm
