import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ShoppingCart } from 'react-feather'
import { useCartContext } from '@/contexts/CartContext'
import CartItem from './Cart/CartItem'

export default function Cart() {
  const cart = useCartContext()
  return (
    <Sheet>
    <SheetTrigger>
      <ShoppingCart/>
    </SheetTrigger>
    <SheetContent side={'right'}>
      <SheetHeader>
        <SheetTitle>
          Your Cart
        </SheetTitle>
      </SheetHeader>
      <div>
        {
          cart?.cartItems.map((item => {
            return (
              item.id ? <CartItem item={item} key={item.id}/> : <></>
            )
          }))
        }
      </div>
    </SheetContent>
  </Sheet>
  )
}
