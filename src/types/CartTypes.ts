type ActionType = 'ADD' | 'DELETE' | 'QTY_INC' | 'QTY_DEC'

type ItemType = {
    id: string,
    name: string,
    price: string,
    quantity: number,
    description: string,
    images: string[],
}

type ItemsType = ItemType[]

type CartContextType = {
    cartItems: ItemsType
    dispatchCartItems?: (action: {type: ActionType, cartItem: ItemType}) => void
}