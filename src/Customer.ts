import Person from "./Person"

export default class Customer extends Person {
    cashback: number
    
    constructor(id: string, name: string, cashback: number, dob = new Date()) {
        super(id, name, dob)
        this.cashback = cashback
    }

    example(){
        
    }
    // printMe(): string {
    //     console.log(super.printMe(), " | ", this.cashback)
    //     return super.printMe() + " | " + this.cashback;
    // }

}


