import React from 'react'
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, User } from 'react-feather'
import Cart from './CustomerMenu/Cart'
import Wishlist from './CustomerMenu/Wishlist'

export default function CustomerMenu() {
  return (
    <div className='flex flex-row flex-nowrap items-center'>
      <Cart/>
      <Wishlist/>
      <Button variant={'ghost'}><User/></Button>
    </div>
  )
}
