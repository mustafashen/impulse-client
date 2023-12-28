'use client'
import { fetchProductsById } from "@/lib/api/product/product"
import { fetchWishlistLine, listWishlistLines, toggleWishlistLine } from "@/lib/api/wishlist/wishlist"
import { getCookie, setCookie } from "@/lib/cookies/cookieMethods"
import { getProductImages } from "@/lib/s3/fetchProductImages"
import { createContext, useContext, useEffect, useReducer } from "react"

function wishlistReducer(state: WishlistItem[], action: {type: 'TOGGLE' | 'SET', wishlistItem?: WishlistItem, wishlistItems?: WishlistItems}) {
    let stateCopy = [...state]
    let {wishlistItem, wishlistItems} = action
    const id = wishlistItem ? wishlistItem.id : undefined

    if (action.type === 'TOGGLE' && wishlistItem) {
        const existingIndex = stateCopy.findIndex((el: WishlistItem) => el.id === id)

        if (existingIndex === -1) {
            stateCopy = [...stateCopy, wishlistItem]
        } else {
            stateCopy.splice(existingIndex, 1)
        }
        toggleWishlistLine({product_id: wishlistItem.id})
    } else if (action.type === 'SET' && wishlistItems) {
        stateCopy = wishlistItems
    }

    return stateCopy
}

const WishlistContext = createContext<WishlistContextType | null>(null)

export function WishlistContextProvider({children} : {children: React.ReactElement}) {
    

  const [wishlistItems, dispatchWishlistItems] = useReducer(wishlistReducer, [])

    async function setWishlist() {
        const wishlistLines = await listWishlistLines()
        Promise.all(
            wishlistLines.map(async (wishlistLine: WishlistItem) => {
                const [product, images] = await Promise.all([
                    fetchProductsById(wishlistLine.product_id), 
                    getProductImages({id: wishlistLine.product_id})])
                    
                return {...product[0], images}
            })
        ).then(result => {
            dispatchWishlistItems({type: 'SET', wishlistItems: result})
        })
    }

    useEffect(() => {
        setWishlist()
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