import { useState } from 'react'
import Accordion from './Accordion'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import PersonalDetailsForm from './PersonalDetailsForm'
import Button from './Button'
import PersonalInfo from '../data/personalInfo'
import Education from '../data/education'
import Experience from '../data/experience'

interface SidebarProps {
    setPersonalInfoData: (data: PersonalInfo) => void
    setEducationData: (data: Education) => void
    setExperienceData: (data: Experience) => void
}

const Sidebar = ({
    setPersonalInfoData,
    setEducationData,
    setExperienceData,
}: SidebarProps) => {
    const [activeIndex, setIndex] = useState(-1) // Accordion State

    return (
        <div className="max-w-[400px] p-10">
            <PersonalDetailsForm setPersonalInfoData={setPersonalInfoData} />
            <Accordion
                title="Education"
                isActive={activeIndex === 0}
                onOpen={() => setIndex(0)}
                onClose={() => setIndex(-1)}
            >
                <EducationForm setEducationData={setEducationData} />
            </Accordion>
            <Accordion
                title="Experience"
                isActive={activeIndex === 1}
                onOpen={() => setIndex(1)}
                onClose={() => setIndex(-1)}
            >
                <ExperienceForm setExperienceData={setExperienceData} />
            </Accordion>
            <div className="py-3">
                <Button>LOAD EXAMPLE</Button>
            </div>
        </div>
    )
}

export default Sidebar
