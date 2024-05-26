import Person from "./Person";
import { customers, employees } from "./data_db";


// employees[1].salary+=5000

employees[1].updateSalary(5000)
employees[2].new_salary=5000
employees[2].hourWage 


customers[2].printMe()
employees[1].printMe()

let persons = [...customers, ...employees];

persons.forEach(p => p.printMe())

