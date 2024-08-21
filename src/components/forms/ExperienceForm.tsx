import Experience from '../../data/experience'

interface ExperienceFormProps {
    setExperienceData: (data: Experience) => void
    data: Experience
}

const ExperienceForm = ({ setExperienceData, data }: ExperienceFormProps) => {
    return (
        <div className="rounded-b-lg bg-neutral-200 font-semibold">
            <form className="flex flex-col px-2 py-2">
                <label htmlFor="companyName" className="py-1 font-semibold">
                    Company Name
                </label>
                <input
                    type="text"
                    id="companyName"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={data.companyName}
                    onChange={(e) =>
                        setExperienceData({
                            ...data,
                            companyName: e.target.value,
                        })
                    }
                ></input>
                <label htmlFor="positionTitle" className="py-1 font-semibold">
                    Position Title
                </label>
                <input
                    type="text"
                    id="positionTitle"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={data.positionTitle}
                    onChange={(e) =>
                        setExperienceData({
                            ...data,
                            positionTitle: e.target.value,
                        })
                    }
                ></input>
                <label htmlFor="startDate" className="py-1 font-semibold">
                    Start Date
                </label>
                <input
                    type="text"
                    id="startDate"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={data.startDate}
                    onChange={(e) =>
                        setExperienceData({
                            ...data,
                            startDate: e.target.value,
                        })
                    }
                ></input>
                <label htmlFor="endDate" className="py-1 font-semibold">
                    End Date
                </label>
                <input
                    type="text"
                    id="endDate"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={data.endDate}
                    onChange={(e) =>
                        setExperienceData({
                            ...data,
                            endDate: e.target.value,
                        })
                    }
                ></input>
                <label htmlFor="location" className="py-1 font-semibold">
                    Location
                </label>
                <input
                    type="text"
                    id="location"
                    className="bg-netrual-50 mx-5 rounded-md px-2 py-1"
                    value={data.location}
                    onChange={(e) =>
                        setExperienceData({
                            ...data,
                            location: e.target.value,
                        })
                    }
                ></input>
                <label htmlFor="description" className="py-1 font-semibold">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    className="bg-netrual-50 mx-5 mb-5 rounded-md px-2 py-1"
                    value={data.description}
                    onChange={(e) =>
                        setExperienceData({
                            ...data,
                            description: e.target.value,
                        })
                    }
                ></input>
            </form>
        </div>
    )
}

export default ExperienceForm
