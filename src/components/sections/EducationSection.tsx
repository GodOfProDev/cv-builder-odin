import BodySection from './BodySection'

interface EducationSectionProps {
    school: string
    degree: string
    startDate: string
    endDate: string
    location: string
}

const EducationSection = ({
    school,
    degree,
    startDate,
    endDate,
    location,
}: EducationSectionProps) => {
    return (
        <BodySection
            header="Education"
            title={school}
            startDate={startDate}
            endDate={endDate}
            location={location}
        >
            <p className="p-1">{degree}</p>
        </BodySection>
    )
}

export default EducationSection
