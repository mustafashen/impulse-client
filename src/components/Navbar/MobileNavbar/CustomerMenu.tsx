import React from 'react'
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, User } from 'react-feather'

export default function CustomerMenu() {
  return (
    <div className='flex flex-row flex-nowrap items-center'>
      <Button variant={'ghost'}><ShoppingCart/></Button>
      <Button variant={'ghost'}><Heart/></Button>
      <Button variant={'ghost'}><User/></Button>
    </div>
  )
}
