import Education from '../data/education'
import Experience from '../data/experience'
import PersonalInfo from '../data/personalInfo'
import EducationSection from './sections/EducationSection'
import ExperienceSection from './sections/ExperienceSection'
import PersonalInfoSection from './sections/PersonalInfoSection'

interface ResumePreviewProps {
    personalInfoData: PersonalInfo
    educationData: Education
    experienceData: Experience
}

const ResumePreview = ({
    personalInfoData,
    educationData,
    experienceData,
}: ResumePreviewProps) => {
    return (
        <div className="p-3">
            <PersonalInfoSection personalInfoData={personalInfoData} />
            <EducationSection
                school={educationData.school}
                degree={educationData.degree}
                startDate={educationData.startDate}
                endDate={educationData.endDate}
                location={educationData.location}
            />
            <ExperienceSection
                companyName={experienceData.companyName}
                positionTitle={experienceData.positionTitle}
                description={experienceData.description}
                startDate={experienceData.startDate}
                endDate={experienceData.endDate}
                location={experienceData.location}
            />
        </div>
    )
}

export default ResumePreview
