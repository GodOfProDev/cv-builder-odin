import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import {
    exampleEducationData,
    exampleExperienceData,
    examplePersonalInfoData,
} from './data/exampleData'
import PersonalInfo from './data/personalInfo'
import Education from './data/education'
import Experience from './data/experience'

const App = () => {
    const [personalInfoData, setPersonalInfoData] = useState<PersonalInfo>(
        examplePersonalInfoData
    )
    const [educationData, setEducationData] =
        useState<Education>(exampleEducationData)
    const [experienceData, setExperienceData] = useState<Experience>(
        exampleExperienceData
    )

    useEffect(() => {
        console.log(personalInfoData)
        console.log(educationData)
        console.log(experienceData)
    }, [])

    useEffect(() => {
        console.log(educationData)
    }, [educationData])

    useEffect(() => {
        console.log(experienceData)
    }, [experienceData])

    useEffect(() => {
        console.log(personalInfoData)
    }, [personalInfoData])

    return (
        <div className="bg-slate-100">
            <Sidebar
                setPersonalInfoData={setPersonalInfoData}
                setEducationData={setEducationData}
                setExperienceData={setExperienceData}
            />
        </div>
    )
}

export default App
