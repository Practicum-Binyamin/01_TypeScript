import Item from "./Item"

interface IStorageCrud<T> {
    addItem(item: T): T
    removeItem(id: string): boolean
    getItem(id: string): T | undefined
    printStorage(): void
}

export default class Storage<T extends Item> implements IStorageCrud<T> {
    private items: T[] = []

    addItem(item: T): T {
        this.items.push(item)
        return item;
    }
    removeItem(id: string): boolean {
        throw new Error("Method not implemented.")
    }
    getItem(id: string): T | undefined {
        return this.items.find(it=>it.barcode==id)
    }
    printStorage(): void {
        throw new Error("Method not implemented.")
    }

}


// export default class Storage implements IStorageCrud {
//     private items: Item[] = []

//     addItem(item: Item): Item {
//         this.items.push(item)
//         return item;
//     }
//     removeItem(id: string): boolean {
//         throw new Error("Method not implemented.")
//     }
//     getItem(id: string): Item | undefined {
//         return this.items.find(it=>it.barcode==id)
//     }
//     printStorage(): void {
//         throw new Error("Method not implemented.")
//     }

// }


