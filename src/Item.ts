// export default abstract class Item {
//     name: string
//     barcode: number
//     price: number
//     stock: number

//     constructor(n: string, b: number, p: number, s = 0) {
//         this.name = n
//         this.barcode = b
//         this.price = p
//         this.stock = s
//     }
// }

export default interface Item {
    name: string
    barcode: string
    price: number
    stock?: number
    updatePrice(newPrice:number) : number
}