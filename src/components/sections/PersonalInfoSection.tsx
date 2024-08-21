import PersonalInfo from '../../data/personalInfo'

interface PersonalInfoSectionProps {
    personalInfoData: PersonalInfo
}

const PersonalInfoSection = ({
    personalInfoData,
}: PersonalInfoSectionProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 bg-blue-900 text-white">
            <h1 className="pt-8 text-4xl font-semibold">
                {personalInfoData.fullName}
            </h1>
            <div className="flex gap-1 pb-8 max-[680px]:grid max-[680px]:grid-rows-3 max-[680px]:text-xl">
                <div className="flex items-center justify-center">
                    {personalInfoData.email && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5 text-white"
                        >
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    )}

                    <p className="px-2">{personalInfoData.email}</p>
                </div>
                <div className="flex items-center justify-center">
                    {personalInfoData.phoneNumber && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}

                    <p className="px-2">{personalInfoData.phoneNumber}</p>
                </div>
                <div className="flex items-center justify-center">
                    {personalInfoData.address && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-5 text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}

                    <p className="px-2">{personalInfoData.address}</p>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoSection
