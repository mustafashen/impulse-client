import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ShoppingCart } from 'react-feather'
import { useCartContext } from '@/contexts/CartContext'
import CartItem from './Cart/CartItem'
import CheckoutButton from './Cart/CheckoutButton'

export default function Cart() {
  const cart = useCartContext()
  console.log(cart)
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
      <CheckoutButton cart={cart}/>
    </SheetContent>
  </Sheet>
  )
}
