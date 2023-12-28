type ActionType = 'ADD' | 'DELETE' | 'QTY_INC' | 'QTY_DEC' | 'SET'

type CartItem = {}
type CartItems = CartItem[]

type CartContextType = {
    cartItems: CartItems
    dispatchCartItems?: (action: {type: ActionType, cartItem: CartItem}) => void
}