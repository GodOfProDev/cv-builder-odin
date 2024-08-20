export default class PersonalInfo {
    fullName: string
    email: string
    phoneNumber: string
    address: string

    constructor(
        fullName: string,
        email: string,
        phoneNumber: string,
        address: string
    ) {
        this.fullName = fullName
        this.email = email
        this.phoneNumber = phoneNumber
        this.address = address
    }
}
