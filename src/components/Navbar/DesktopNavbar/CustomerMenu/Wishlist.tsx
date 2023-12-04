import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Heart } from 'react-feather'
import { useWishlistContext } from '@/contexts/WishlistContext'
import WishlistItem from './Wishlist/WishlistItem'
import { Button } from '@/components/ui/button'
import { HeartIcon } from '@radix-ui/react-icons'

export default function Wishlist() {
  const wishlist = useWishlistContext()
  return (
    <Sheet>
    <SheetTrigger>
      <Heart/>
    </SheetTrigger>
    <SheetContent side={'right'}>
      <SheetHeader>
        <SheetTitle>
          Your Wishlist
        </SheetTitle>
      </SheetHeader>
      <div>
          {
            wishlist?.wishlistItems.map((item => {
              return (
                <WishlistItem key={item.id} item={item}/>
              )
            }))
          }
      </div>
    </SheetContent>
  </Sheet>
  )
}
