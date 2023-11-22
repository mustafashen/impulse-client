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
  
export default function CustomerMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <ShoppingCart/>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>CartItems</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Heart/>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>WishlistItems</NavigationMenuLink>
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
