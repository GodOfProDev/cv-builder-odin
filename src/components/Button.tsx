interface ButtonProps {
    onClick?: () => void
    children: string
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="inline-block cursor-pointer rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:scale-95"
        >
            {children}
        </button>
    )
}

export default Button
