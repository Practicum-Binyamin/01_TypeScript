import Customer from "./Customer";
import Employee from "./Employee";

class Order {
    employee: Employee
    customer: Customer

    constructor(id: string) {
        this.customer = new Customer("sad", "sd", 32)
        this.employee = new Employee("sad", "sd", 32)
    }
}