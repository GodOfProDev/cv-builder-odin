import { useEffect, useState } from 'react'
import Education from '../../data/education'

interface EducationFormProps {
    setEducationData: (data: Education) => void
    data: Education
}

const EducationForm = ({ setEducationData, data }: EducationFormProps) => {
    const [school, setSchool] = useState(data.school)
    const [degree, setDegree] = useState(data.degree)
    const [startDate, setStartDate] = useState(data.startDate)
    const [endDate, setEndDate] = useState(data.endDate)
    const [location, setLocation] = useState(data.location)

    useEffect(() => {
        const newData = new Education(
            school,
            degree,
            startDate,
            endDate,
            location
        )

        setEducationData(newData)
    }, [school, degree, startDate, endDate, location])

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
                    onChange={(e) => setSchool(e.target.value)}
                ></input>
                <label htmlFor="degree" className="py-1 font-semibold">
                    Degree
                </label>
                <input
                    type="text"
                    id="degree"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                ></input>
                <label htmlFor="startDate" className="py-1 font-semibold">
                    Start Date
                </label>
                <input
                    type="text"
                    id="startDate"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                ></input>
                <label htmlFor="endDate" className="py-1 font-semibold">
                    End Date
                </label>
                <input
                    type="text"
                    id="endDate"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                ></input>
                <label htmlFor="location" className="py-1 font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    className="bg-netrual-50 mx-5 mb-5 rounded-md px-2 py-1"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                ></input>
            </form>
        </div>
    )
}

export default EducationForm
