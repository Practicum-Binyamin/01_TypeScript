import Customer from "./Customer";
import Employee from "./Employee";

class Order{
    employee : Employee
    customer : Customer

    constructor(id){
        this.customer =new Customer("sad","sd",32)
    }
}