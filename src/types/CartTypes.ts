type ActionType = 'ADD' | 'DELETE' | 'QTY_INC' | 'QTY_DEC'

type ItemType = {
    productID: string,
    productName: string,
    productPrice: string,
    quantity: number
}

type ItemsType = ItemType[]

type CartContextType = {
    cartItems: ItemsType
    dispatchCartItems?: (action: {type: ActionType, cartItem: ItemType}) => void
}