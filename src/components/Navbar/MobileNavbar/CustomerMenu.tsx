import React from 'react'
import { Button } from "@/components/ui/button"

export default function CustomerMenu() {
  return (
    <div>
      <Button variant={'ghost'}>Cart</Button>
      <Button variant={'ghost'}>Wishlist</Button>
      <Button variant={'ghost'}>Account</Button>
    </div>
  )
}
