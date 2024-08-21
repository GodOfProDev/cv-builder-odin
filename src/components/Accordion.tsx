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
            <div>
                <button
                    onClick={onClose}
                    className="mt-5 flex w-full cursor-pointer items-center justify-between rounded-t-lg border-none bg-neutral-200 p-4 text-xl font-semibold hover:bg-indigo-300"
                >
                    {title}
                </button>
                <div>{children}</div>
            </div>
        )
    } else {
        return (
            <button
                onClick={onOpen}
                className="my-5 flex w-full cursor-pointer items-center justify-between rounded-lg border-none bg-neutral-200 p-4 text-xl font-semibold hover:bg-indigo-300"
            >
                {title}
            </button>
        )
    }
}

export default Accordion
