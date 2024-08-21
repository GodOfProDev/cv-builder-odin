import { ReactNode } from 'react'

interface BodySectionProps {
    header: string
    title: string
    startDate: string
    endDate: string
    location: string
    children: ReactNode
}

const BodySection = ({
    header,
    title,
    startDate,
    endDate,
    location,
    children,
}: BodySectionProps) => {
    return (
        <div className="bg-slate-50">
            <div className="p-4">
                <div className="flex items-center justify-center bg-neutral-200 p-2">
                    <p className="text-xl font-bold">{header}</p>
                </div>

                <div className="flex flex-col py-5">
                    <div className="flex gap-4">
                        <p className="text-lg">
                            {startDate} {'-'} {endDate}
                        </p>
                        <p className="text-lg font-bold">{title}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="text-lg">{location}</p>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodySection
