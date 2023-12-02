
type WishlistContextType = {
  wishlistItems: ItemsType,
  dispatchWishlistItems?: (action: {wishlistItem: ItemType}) => void
}
