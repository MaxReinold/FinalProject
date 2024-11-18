export interface ShoppingItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  pictures: string[];
}

export interface NewShoppingItem extends Omit<ShoppingItem, "id" | "pictures"> {
  pictures: File[] | null;
}
