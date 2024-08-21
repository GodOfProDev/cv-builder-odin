import BodySection from './BodySection'

interface EducationSectionProps {
    companyName: string
    positionTitle: string
    description: string
    startDate: string
    endDate: string
    location: string
}

const ExperienceSection = ({
    companyName,
    positionTitle,
    description,
    startDate,
    endDate,
    location,
}: EducationSectionProps) => {
    return (
        <BodySection
            header="Experience"
            title={companyName}
            startDate={startDate}
            endDate={endDate}
            location={location}
        >
            <div className="px-6">
                <p>{positionTitle}</p>
                <p className="py-1">{description}</p>
            </div>
        </BodySection>
    )
}

export default ExperienceSection
