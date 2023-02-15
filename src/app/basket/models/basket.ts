export interface Basket {
  id: string;
  basketId: string;
  items: BasketItem[];
}

export interface BasketItem {
  productId: number;
  quantity: number;
}
