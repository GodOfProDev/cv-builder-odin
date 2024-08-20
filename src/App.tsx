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
import ResumePreview from './components/ResumePreview'

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
        <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)] bg-slate-100 max-[900px]:grid-cols-1 max-[900px]:grid-rows-2">
            <Sidebar
                setPersonalInfoData={setPersonalInfoData}
                setEducationData={setEducationData}
                setExperienceData={setExperienceData}
            />
            <ResumePreview />
        </div>
    )
}

export default App
