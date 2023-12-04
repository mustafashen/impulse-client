import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Minus, Plus, ShoppingCart } from 'react-feather'
import { useCartContext } from '@/contexts/CartContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import product_placeholder from "../../../../../public/images/product_placeholder.jpg"
import { Button } from '@/components/ui/button'
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
              <CartItem item={item} key={item.id}/>
            )
          }))
        }
      </div>
    </SheetContent>
  </Sheet>
  )
}
