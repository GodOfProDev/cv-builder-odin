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
                    className="justify-betweenborder-none mt-5 flex w-full cursor-pointer items-center rounded-t-lg bg-neutral-200 p-4 text-xl font-semibold"
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
                className="my-5 flex w-full cursor-pointer items-center justify-between rounded-lg border-none bg-neutral-200 p-4 text-xl font-semibold"
            >
                {title}
            </button>
        )
    }
}

export default Accordion
