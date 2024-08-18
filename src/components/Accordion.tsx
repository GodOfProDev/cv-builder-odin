import { ReactNode } from 'react'

interface AccordionProp {
    title: string
    isActive: boolean
    onClick: () => void
    children: ReactNode
}

const Accordion = ({ title, children, isActive, onClick }: AccordionProp) => {
    if (isActive) {
        return (
            <button onClick={onClick}>
                <h2>Accordion - {title}</h2>
                {children}
            </button>
        )
    } else {
        return (
            <div>
                <button
                    onClick={onClick}
                    className="text-2xl text-red-700 underline"
                >
                    Accordion - {title} - NOT ACTIVE
                </button>
            </div>
        )
    }
}

export default Accordion
