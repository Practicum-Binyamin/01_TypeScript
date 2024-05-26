export default class Person {
    fullName: string
    id: string
    dob: Date

    constructor(id: string, name: string, dob = new Date()) {
        this.id = id
        this.fullName = name
        this.dob = dob
    }

    printMe() :string{
        return this.fullName + " | " + this.id + "\n" +  this.dob
    }
}