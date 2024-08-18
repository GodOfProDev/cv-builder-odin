import Accordion from './Accordion'
// import EducationForm from './EducationForm'
// import ExperienceForm from './ExperienceForm'
import PersonalDetailsForm from './PersonalDetailsForm'

const Sidebar = () => {
    return (
        <div className="w-[450px] bg-red-100">
            <PersonalDetailsForm />
            {/* props: {title: "Education"} */}
            <Accordion>{/* <EducationForm /> */}</Accordion>
            {/* props: {title: "Experience"} */}
            <Accordion>{/* <ExperienceForm /> */}</Accordion>
        </div>
    )
}

export default Sidebar
