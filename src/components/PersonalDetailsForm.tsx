import { useState } from 'react'
import PersonalInfo from '../data/personalInfo'
import { examplePersonalInfoData } from '../data/exampleData'

interface PersonalDetailsFormProps {
    setPersonalInfoData: (data: PersonalInfo) => void
}

const exampleData = examplePersonalInfoData

const PersonalDetailsForm = ({
    setPersonalInfoData,
}: PersonalDetailsFormProps) => {
    const [fullName, setFullName] = useState(exampleData.fullName)
    const [email, setEmail] = useState(exampleData.email)
    const [phoneNumber, setPhoneNumber] = useState(exampleData.phoneNumber)
    const [address, setAddress] = useState(exampleData.address)

    const handleDataChange = () => {
        const newData = new PersonalInfo(fullName, email, phoneNumber, address)

        setPersonalInfoData(newData)
    }

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
                    onChange={(e) => {
                        setFullName(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="email" className="py-1 font-semibold">
                    Email
                </label>
                <input
                    type="text"
                    id="email"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => {
                        setEmail(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="phoneNumber" className="py-1 font-semibold">
                    Phone number
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => {
                        setPhoneNumber(e.target.value)
                        handleDataChange()
                    }}
                ></input>
                <label htmlFor="address" className="py-1 font-semibold">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    className="bg-netrual-50 mx-5 rounded-md py-1"
                    onChange={(e) => {
                        setAddress(e.target.value)
                        handleDataChange()
                    }}
                ></input>
            </form>
        </div>
    )
}

export default PersonalDetailsForm
