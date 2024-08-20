const PersonalDetailsForm = () => {
    return (
        <div className="rounded-lg bg-neutral-200 p-3 pb-4 font-semibold">
            <h2 className="p-3 text-3xl">Personal Details</h2>
            <form className="flex flex-col px-2 py-2">
                <label htmlFor="fullName" className="py-1 font-semibold">
                    Full name
                </label>
                <input
                    type="text"
                    id="fullName"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="email" className="py-1 font-semibold">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="phoneNumber" className="py-1 font-semibold">
                    Phone number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="address" className="py-1 font-semibold">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
            </form>
        </div>
    )
}

export default PersonalDetailsForm
