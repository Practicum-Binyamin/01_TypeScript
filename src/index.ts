// import Person from "./Person";
// import { customers, employees } from "./data_db";

import ElectronicItem from "./ElectronicItem"
import FoodItem from "./FoodItem"
import Storage from "./Storage"


type Product = ElectronicItem | FoodItem 


let elecStorage = new Storage<ElectronicItem>()
let foodStorage = new Storage<FoodItem>()

foodStorage.addItem(new FoodItem("banana","32",983))

elecStorage.addItem(new ElectronicItem("phone", "123", 3224))
let item = elecStorage.getItem("123")
console.log(item);

function printS(product : Product){
    product.updatePrice(44)
}

// employees[1].salary+=5000

// employees[1].updateSalary(5000)
// employees[2].new_salary=5000
// employees[2].hourWage 


// customers[2].printMe()
// employees[1].printMe()

// let persons = [...customers, ...employees];

// persons.forEach(p => p.printMe())

