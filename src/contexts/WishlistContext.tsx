'use client'
import { getCookie, setCookie } from "@/lib/cookies/cookieMethods"
import { createContext, useContext, useEffect, useReducer } from "react"

function wishlistReducer(state: ItemType[], action: {type: 'TOGGLE' | 'SET', wishlistItem?: ItemType, wishlistItems?: ItemsType}) {
    let stateCopy = [...state]
    let {wishlistItem, wishlistItems} = action
    const id = wishlistItem ? wishlistItem.id : undefined

    if (action.type === 'TOGGLE' && wishlistItem) {
        const existingIndex = stateCopy.findIndex((el: ItemType) => el.id === id)

        if (existingIndex === -1) {
            stateCopy = [...stateCopy, wishlistItem]
        } else {
            stateCopy.splice(existingIndex, 1)
        }

        const state_str = JSON.stringify(stateCopy)
        setCookie('customer_wishlist', state_str) 
        
    } else if (action.type === 'SET' && wishlistItems) {
        stateCopy = wishlistItems
    }

    return stateCopy
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export function WishlistContextProvider({children} : {children: React.ReactElement}) {
    

  const [wishlistItems, dispatchWishlistItems] = useReducer(wishlistReducer, [])

    useEffect(() => {
        async function setCachedCart() {
            const str_state = await getCookie('customer_wishlist')
            if (str_state && str_state.value.length > 0) {
                const wishlist_state = JSON.parse(str_state.value) 
                dispatchWishlistItems({ type: 'SET', wishlistItems: wishlist_state})
            }
        }
        setCachedCart()
    },[])


    const WishlistContextStore: WishlistContextType = {
        wishlistItems,
        dispatchWishlistItems
    }
    
    return (
        <WishlistContext.Provider value={WishlistContextStore}>
            {children}
        </WishlistContext.Provider>
    )
    

}

export const useWishlistContext = () => useContext(WishlistContext)