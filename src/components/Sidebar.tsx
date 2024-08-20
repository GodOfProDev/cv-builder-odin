import { useState } from 'react'
import Accordion from './Accordion'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import PersonalDetailsForm from './PersonalDetailsForm'

const Sidebar = () => {
    const [activeIndex, setIndex] = useState(-1) // Accordion State

    return (
        <div className="max-w-[400px] p-10">
            <PersonalDetailsForm />
            <Accordion
                title="Education"
                isActive={activeIndex === 0}
                onOpen={() => setIndex(0)}
                onClose={() => setIndex(-1)}
            >
                <EducationForm />
            </Accordion>
            <Accordion
                title="Experience"
                isActive={activeIndex === 1}
                onOpen={() => setIndex(1)}
                onClose={() => setIndex(-1)}
            >
                <ExperienceForm />
            </Accordion>
        </div>
    )
}

export default Sidebar
