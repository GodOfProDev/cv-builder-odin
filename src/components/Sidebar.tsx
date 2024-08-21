import { useState } from 'react'
import Accordion from './Accordion'
import EducationForm from './forms/EducationForm'
import ExperienceForm from './forms/ExperienceForm'
import PersonalDetailsForm from './forms/PersonalDetailsForm'
import PersonalInfo from '../data/personalInfo'
import Education from '../data/education'
import Experience from '../data/experience'

interface SidebarProps {
    setPersonalInfoData: (data: PersonalInfo) => void
    setEducationData: (data: Education) => void
    setExperienceData: (data: Experience) => void
    personalInfoData: PersonalInfo
    educationData: Education
    experienceData: Experience
}

const Sidebar = ({
    setPersonalInfoData,
    setEducationData,
    setExperienceData,
    personalInfoData,
    educationData,
    experienceData,
}: SidebarProps) => {
    const [activeIndex, setIndex] = useState(-1) // Accordion State

    return (
        <div className="p-3">
            <PersonalDetailsForm
                setPersonalInfoData={setPersonalInfoData}
                data={personalInfoData}
            />
            <Accordion
                title="Education"
                isActive={activeIndex === 0}
                onOpen={() => setIndex(0)}
                onClose={() => setIndex(-1)}
            >
                <EducationForm
                    setEducationData={setEducationData}
                    data={educationData}
                />
            </Accordion>
            <Accordion
                title="Experience"
                isActive={activeIndex === 1}
                onOpen={() => setIndex(1)}
                onClose={() => setIndex(-1)}
            >
                <ExperienceForm
                    setExperienceData={setExperienceData}
                    data={experienceData}
                />
            </Accordion>
        </div>
    )
}

export default Sidebar
