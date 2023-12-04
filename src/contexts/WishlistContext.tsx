'use client'
import { createContext, useContext, useReducer } from "react"

function wishlistReducer(state: ItemType[], action: {wishlistItem: ItemType}) {
    console.log('wishlistReducer')
    let stateCopy = [...state]
    let {wishlistItem} = action
    const {id} = wishlistItem

    const existingIndex = stateCopy.findIndex((el: ItemType) => el.id === id)

    if (existingIndex === -1) {
        stateCopy = [...stateCopy, wishlistItem]
    } else {
        stateCopy.splice(existingIndex, 1)
    }

    return stateCopy
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export function WishlistContextProvider({children} : {children: React.ReactElement}) {
    

  const [wishlistItems, dispatchWishlistItems] = useReducer(wishlistReducer, [])


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