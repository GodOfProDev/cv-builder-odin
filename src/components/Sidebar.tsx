import Accordion from './Accordion'
import PersonalDetailsForm from './PersonalDetailsForm'

const Sidebar = () => {
    return (
        <div className="w-[450px] bg-red-100">
            <PersonalDetailsForm />
            <Accordion /> {/* Props: {title: "Education"} */}
            <Accordion /> {/* Props: {title: "Experience"} */}
        </div>
    )
}

export default Sidebar
