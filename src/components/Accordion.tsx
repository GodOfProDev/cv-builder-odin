import { ReactNode } from 'react'

interface AccordionProp {
    title: string
    isActive: boolean
    onOpen: () => void
    onClose: () => void
    children: ReactNode
}

const Accordion = ({
    title,
    children,
    isActive,
    onOpen,
    onClose,
}: AccordionProp) => {
    if (isActive) {
        return (
            <div className="my-3 rounded-lg bg-neutral-200 p-3 pb-4">
                <button onClick={onClose} className="text-xl font-semibold">
                    {title}
                </button>
                <div className="py-3">{children}</div>
            </div>
        )
    } else {
        return (
            <div className="my-3 rounded-lg bg-neutral-200 p-3 pb-4">
                <button onClick={onOpen} className="text-xl font-semibold">
                    {title}
                </button>
            </div>
        )
    }
}

export default Accordion
