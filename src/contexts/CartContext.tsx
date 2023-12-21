'use client'
import { getCookie, setCookie } from "@/lib/cookies/cookieMethods"
import { createContext, useContext, useEffect, useReducer } from "react"

const addCartItem = (state: ItemsType, cartItem: ItemType) => {
    state = [...state, {...cartItem, quantity: 1}]
    return state
}
const delCartItem = (state: ItemsType, id: string) => {
    state.map((item: ItemType, idx: number) => {
        if (item.id === id) {
            state.splice(idx, 1)
            return
        }
    })
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


function reduceCartItems(state: ItemsType, action: {type: ActionType, cartItem?: ItemType, cartItems?: ItemsType}) {
    let stateCopy = [...state]
    let {type, cartItem, cartItems} = action
    const id = cartItem ? cartItem.id : undefined

    if (type === 'ADD') {
        stateCopy.map((item: ItemType) => {
            if (item.id === id) {
                type = 'QTY_INC'
                return
            }
        })
    }

    if (cartItem) {
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
    } else if (cartItems) {
        switch (type) {
            case 'SET':
                stateCopy = cartItems
                break;
            default:
                break;
        }
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

    if (action.type === 'ADD' ||
        action.type === 'DELETE' ||
        action.type === 'QTY_INC' ||
        action.type === 'QTY_DEC') {
        const state_str = JSON.stringify(stateCopy)
        setCookie('customer_cart', state_str) 
    }

    return stateCopy
}

const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({children} : {children: React.ReactElement}) {

    const [cartItems, dispatchCartItems] = useReducer(reduceCartItems, [])

    useEffect(() => {
        async function setCachedCart() {
            const str_state = await getCookie('customer_cart')
            if (str_state && str_state.value.length > 0) {
                const cart_state = JSON.parse(str_state.value) 
                dispatchCartItems({ type: 'SET', cartItems: cart_state})
            }
        }
        setCachedCart()
    },[])
    
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