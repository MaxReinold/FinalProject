export interface ShoppingItem {
    id: number,
    name: string,
    description: string,
    price: number,
    pictures: string[],
}

export interface NewShoppingItem extends Omit<ShoppingItem, "id" | "pictures"> {
    pictures: File[] | null
}