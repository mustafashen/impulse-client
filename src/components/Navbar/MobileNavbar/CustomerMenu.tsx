import React from 'react'
import { Button } from "@/components/ui/button"

export default function CustomerMenu() {
  return (
    <div className='flex flex-row flex-nowrap items-center'>
      <Button variant={'ghost'}>Cart</Button>
      <Button variant={'ghost'}>Wishlist</Button>
      <Button variant={'ghost'}>Account</Button>
    </div>
  )
}
