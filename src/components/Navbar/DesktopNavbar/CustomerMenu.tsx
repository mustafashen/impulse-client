import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Heart, ShoppingCart, User } from 'react-feather'
import { useCartContext } from '@/contexts/CartContext'
import { useWishlistContext } from '@/contexts/WishlistContext'
  
export default function CustomerMenu() {
  const {cartItems}: any  = useCartContext()
  const {wishlistItems}: any = useWishlistContext()
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <ShoppingCart/>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>{cartItems.length}</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Heart/>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>{wishlistItems.length}</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <User/>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>AccountItems</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
