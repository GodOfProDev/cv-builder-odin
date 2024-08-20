export default class Experience {
    companyName: string
    positionTitle: string
    startDate: string
    endDate: string
    location: string
    description: string

    constructor(
        companyName: string,
        positionTitle: string,
        startDate: string,
        endDate: string,
        location: string,
        description: string
    ) {
        this.companyName = companyName
        this.positionTitle = positionTitle
        this.startDate = startDate
        this.endDate = endDate
        this.location = location
        this.description = description
    }
}
