import Item from "./Item"

interface Item2 {
    name: string
    barcode: string
    price: number
    stock?: number
    updatePrice(newPrice:number) : number
}

export default class FoodItem implements Item2{
    name: string
    barcode: string
    price: number
    stock?: number | undefined
    updatePrice(newPrice: number): number {
        throw new Error("Method not implemented.")
    }



}

// const it : Item2 = {
//     name : "sadas",
//     price : 32,
//     barcode : "32ai2143q3d2",
//     expired : new Date()
// }





// export default class FoodItem extends Item {

//     expired: Date

//     constructor(n: string, b: number, p: number, s = 0, ex = new Date()) {
//         super(n, b, p, s)
//         this.expired = ex
//     }
// }