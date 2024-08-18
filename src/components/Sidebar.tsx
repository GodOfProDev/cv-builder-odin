import { useState } from 'react'
import Accordion from './Accordion'
import EducationForm from './EducationForm'
import ExperienceForm from './ExperienceForm'
import PersonalDetailsForm from './PersonalDetailsForm'

const Sidebar = () => {
    const [activeIndex, setIndex] = useState(0)

    const handleAccordionClick = (id: number) => {
        setIndex(id)
    }

    return (
        <div className="w-[450px] bg-red-100">
            <PersonalDetailsForm />
            <Accordion
                title="Education"
                isActive={activeIndex === 0}
                onClick={() => handleAccordionClick(0)}
            >
                <EducationForm />
            </Accordion>
            <Accordion
                title="Experience"
                isActive={activeIndex === 1}
                onClick={() => handleAccordionClick(1)}
            >
                <ExperienceForm />
            </Accordion>
        </div>
    )
}

export default Sidebar
