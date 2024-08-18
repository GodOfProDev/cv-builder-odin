import { useState } from 'react'
import Accordion from './Accordion'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import PersonalDetailsForm from './PersonalDetailsForm'

const Sidebar = () => {
    const [activeIndex, setIndex] = useState(0) // Accordion State

    return (
        <div className="w-[450px] bg-red-100">
            <PersonalDetailsForm />
            <Accordion
                title="Education"
                isActive={activeIndex === 0}
                onClick={() => setIndex(0)}
            >
                <EducationForm />
            </Accordion>
            <Accordion
                title="Experience"
                isActive={activeIndex === 1}
                onClick={() => setIndex(1)}
            >
                <ExperienceForm />
            </Accordion>
        </div>
    )
}

export default Sidebar
