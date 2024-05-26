import Customer  from "./Customer";
import Employee from "./Employee";

const employees: Employee[] = []
employees.push(
    new Employee("32", "moshe", 3232),
    new Employee("49", "levi", 3212),
    new Employee("14", "riki", 20000),
    new Employee("22", "yoni", 1222),
)

const customers: Customer[] = []
customers.push(
    new Customer("320", "uri", 32),
    new Customer("459", "liron", 12),
    new Customer("214", "jeck", 2131),
    new Customer("122", "mor", 32),
)


export {employees, customers}