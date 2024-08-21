import { ReactNode } from 'react'

interface BodySectionProps {
    header: string
    startDate: string
    endDate: string
    location: string
    children: ReactNode
}

const BodySection = ({ header, startDate, endDate, location, children }) => {
    return <div>BodySection</div>
}

export default BodySection
