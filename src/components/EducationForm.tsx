const EducationForm = () => {
    return (
        <div className="rounded-lg bg-neutral-200 font-semibold">
            <form className="flex flex-col px-2 py-2">
                <label htmlFor="school" className="py-1 font-semibold">
                    School
                </label>
                <input
                    type="text"
                    id="school"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="degree" className="py-1 font-semibold">
                    Degree
                </label>
                <input
                    type="text"
                    id="degree"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="startDate" className="py-1 font-semibold">
                    Start Date
                </label>
                <input
                    type="text"
                    id="startDate"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="endDate" className="py-1 font-semibold">
                    End Date
                </label>
                <input
                    type="text"
                    id="endDate"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                ></input>
                <label htmlFor="location" className="py-1 font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    className="bg-netrual-50 mx-5 mb-5 rounded-md py-1"
                ></input>
            </form>
        </div>
    )
}

export default EducationForm
