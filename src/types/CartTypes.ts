type ActionType = 'ADD' | 'DELETE' | 'QTY_INC' | 'QTY_DEC' | 'SET'

type CartLine = {
	id: string,
  cart_id: string,
  product_id: string,
  quantity: number,
}

type CartLines = CartLine[]

type CartItem = {
  id: string,
  name: string,
  price: number,
  quantity: number,
  images: string[],
  cart_line_id: string
}

type CartItems = CartItem[]

type CartContextType = {
    cartItems: CartItems
    dispatchCartItems?: (action: {type: ActionType, cartItem: CartItem}) => void
}