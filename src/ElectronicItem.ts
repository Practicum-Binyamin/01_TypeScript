import Item from "./Item"

export default class ElectronicItem implements Item {
    name: string
    barcode: string
    price: number
    stock?: number | undefined
    
    updatePrice(newPrice: number): number {
        throw new Error("Method not implemented.")
    }
    constructor(n: string, b: string, p: number, s = 0) {
        this.name = n
        this.barcode = b
        this.price = p
        this.stock = s
    }
}
