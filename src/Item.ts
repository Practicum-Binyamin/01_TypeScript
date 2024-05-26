export default abstract class Item {
    name: string
    barcode: number
    price: number
    stock: number

    constructor(n: string, b: number, p: number, s = 0) {
        this.name = n
        this.barcode = b
        this.price = p
        this.stock = s
    }
}