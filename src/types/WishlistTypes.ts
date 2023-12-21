
type WishlistContextType = {
  wishlistItems: ItemsType,
  dispatchWishlistItems?: (action: {type: 'TOGGLE' | 'SET', wishlistItem: ItemType}) => void
}
