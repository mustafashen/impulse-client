'use client'
import { createCartLine, deleteCartLine, listCartLines, updateCartLine } from "@/lib/api/cart/cart"
import { fetchProductsById } from "@/lib/api/product/product"
import { getCookie, setCookie } from "@/lib/cookies/cookieMethods"
import { redirectToAccess } from "@/lib/navigation/redirect"
import { getProductImages } from "@/lib/s3/fetchProductImages"
import { createContext, useContext, useEffect, useReducer } from "react"

const addCartItem = (state: CartItems, cartItem: CartItem) => {
    state = [...state, {...cartItem, quantity: 1}]
    createCartLine({product_id: cartItem.id, quantity: 1}).then((res: any) => {
        if (!res || res.Error) redirectToAccess()
    })
    return state
}
const delCartItem = (state: CartItems, id: string) => {
    state.map((item: CartItem, idx: number) => {
        if (item.id === id) {
            state.splice(idx, 1)
            deleteCartLine({id: item.cart_line_id}).then((res: any) => {
                if (!res || res.Error) redirectToAccess()
            })
            return
        }
    })
}
const qtyIncCartItem = (state: CartItems, id: string) => {
    state.map((item: CartItem, idx: number) => {
        if (item.id === id) {
            ++item.quantity
            updateCartLine({id: item.cart_line_id, updates: {quantity: item.quantity}}).then((res: any) => {
                if (!res || res.Error) redirectToAccess()
            })
            return
        }
    })
    return state
}
const qtyDecCartItem = (state: CartItems, id: string) => {
    state.map((item: CartItem, idx: number) => {
        if (item.id === id) {
            --item.quantity
            updateCartLine({id: item.cart_line_id, updates: {quantity: item.quantity}}).then((res: any) => {
                if (!res || res.Error) redirectToAccess()
            })
            return
        }
    })
    return state
}


function reduceCartItems(state: CartItems, action: {type: ActionType, cartItem?: CartItem, cartItems?: CartItems}) {
    let stateCopy = [...state]
    let {type, cartItem, cartItems} = action
    const id = cartItem ? cartItem.id : undefined

    if (type === 'ADD') {
        stateCopy.map((item: CartItem) => {
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
        stateCopy.map((item: CartItem, idx: number) => {
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

    async function setCart() {
        const cartLines = await listCartLines()
        Promise.all(
            cartLines.map(async (cartLine: CartLine) => {
                const [product, images] = await Promise.all([
                    fetchProductsById(cartLine.product_id), 
                    getProductImages({id: cartLine.product_id})])
                    
                return {...product[0], images, quantity: cartLine.quantity, cart_line_id: cartLine.id}
            })
        ).then(result => {
            dispatchCartItems({type: 'SET', cartItems: result})
        })
    }

    useEffect(() => {

        setCart()
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