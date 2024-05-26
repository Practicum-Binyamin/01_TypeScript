import Item from "./Item";

export default class FoodItem extends Item {

    expired: Date

    constructor(n: string, b: number, p: number, s = 0, ex = new Date()) {
        super(n, b, p, s)
        this.expired=ex
    }
}

// new Item()