
type WishlistLine = {
  id: string,
  product_id: string,
  wishlist_id: string
}

type WishlistLines = WishlistLine[]

type WishlistItem = {
  id: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  images: string[],
}

type WishlistItems = WishlistItem[]

type WishlistContextType = {
  wishlistLines: WishlistLines,
  dispatchWishlistLines?: (action: {type: 'TOGGLE' | 'SET', wishlistLine?: WishlistLine, wishlistLines?: WishlistLines}) => void
}
