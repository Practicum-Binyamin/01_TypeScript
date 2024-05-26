import Person from "./Person";

export default class Employee extends Person {
    private salary: number

    constructor(id: string, name: string, salary: number, dob = new Date()) {
        super(id, name, dob)
        this.salary = salary
    }

    get hourWage(): number {
        return this.salary / 180
    }

    set new_salary(newSalary: number) {
        if (newSalary <= this.salary * 0.1)
            this.salary = newSalary
    }
    
    updateSalary(bonus: number) {
        if (bonus <= this.salary * 0.1)
            this.salary += bonus
    }

    printMe(): string {
        console.log(super.printMe(), " | ", this.salary)
        return super.printMe() + " | " + this.salary;
    }
}

