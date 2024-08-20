export default class Experience {
    school: string
    degree: string
    startDate: string
    endDate: string
    location: string

    constructor(
        school: string,
        degree: string,
        startDate: string,
        endDate: string,
        location: string
    ) {
        this.school = school
        this.degree = degree
        this.startDate = startDate
        this.endDate = endDate
        this.location = location
    }
}
