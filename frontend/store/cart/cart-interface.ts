export interface ICartItem {
  id: string
  price: number
  quantity: number
  totalPrice: number
  name: string
}

export default interface ICart {
  items: ICartItem[]
  totalQuantity: number
  changed: boolean
}
