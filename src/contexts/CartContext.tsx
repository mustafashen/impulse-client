'use client'
import { createContext, useContext, useReducer } from "react"

const addCartItem = (state: ItemsType, cartItem: ItemType) => [...state, {...cartItem, quantity: 1}]
const delCartItem = (state: ItemsType, id: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.id === id) {
            state.splice(idx, 1)
            return
        }
    })
    console.log(state)
}
const qtyIncCartItem = (state: ItemsType, id: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.id === id) {
            ++item.quantity
            return
        }
    })
    return state
}
const qtyDecCartItem = (state: ItemsType, id: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.id === id) {
            --item.quantity
            return
        }
    })
    return state
}

function reduceCartItems(state: ItemsType, action: {type: ActionType, cartItem: ItemType}) {
    let stateCopy = [...state]
    let {type, cartItem} = action
    const {id} = cartItem

    console.log(type, cartItem)
    if (type === 'ADD') {
        stateCopy.map((item: ItemType) => {
            if (item.id === id) {
                type = 'QTY_INC'
                return
            }
        })
    }

    switch (type) {
        case 'ADD':
            stateCopy = addCartItem(stateCopy, cartItem)
            break;
        case 'DELETE':
            delCartItem(stateCopy, cartItem.id)
            break;
        case 'QTY_INC':
            qtyIncCartItem(stateCopy, cartItem.id)
            break;
        case 'QTY_DEC':
            qtyDecCartItem(stateCopy, cartItem.id)
            break;
        default:
            break;
    }

    if (type === 'QTY_DEC') {
        stateCopy.map((item: ItemType, idx: number) => {
            if (item.id === id) {
                if (item.quantity === 0) {
                    stateCopy.splice(idx, 1)
                    return
                }
            }
        })
    }

    return stateCopy
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({children} : {children: React.ReactElement}) {

  const [cartItems, dispatchCartItems] = useReducer(reduceCartItems, [])

    
    const CartContextStore: CartContextType = {
        cartItems,
        dispatchCartItems
    }
    
    return (
        <CartContext.Provider value={CartContextStore}>
            {children}
        </CartContext.Provider>
    )
    

}

export const useCartContext = () => useContext(CartContext)