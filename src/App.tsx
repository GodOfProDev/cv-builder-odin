import { useState } from 'react'
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

    return (
        <div className="grid grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)] bg-slate-100 max-[900px]:grid-cols-1 max-[900px]:grid-rows-2">
            <Sidebar
                setPersonalInfoData={setPersonalInfoData}
                setEducationData={setEducationData}
                setExperienceData={setExperienceData}
                personalInfoData={personalInfoData}
                educationData={educationData}
                experienceData={experienceData}
            />
            <ResumePreview
                personalInfoData={personalInfoData}
                educationData={educationData}
                experienceData={experienceData}
            />
        </div>
    )
}

export default App
