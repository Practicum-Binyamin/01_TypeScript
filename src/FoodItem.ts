import Item from "./Item";

export default class FoodItem implements Item {

    name: string;
    barcode: string;
    price: number;
    stock?: number | undefined;
    updatePrice(newPrice: number): number {
        throw new Error("Method not implemented.");
    }
    expired: Date

    constructor(n: string, b: string, p: number, s = 0, ex = new Date()) {
        this.name = n
        this.barcode = b
        this.price = p
        this.stock = s
        this.expired=ex
    }
}

// new Item()