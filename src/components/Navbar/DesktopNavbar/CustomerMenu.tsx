'use client'
import Cart from './CustomerMenu/Cart'
import Wishlist from './CustomerMenu/Wishlist'
import Link from 'next/link'
import { User } from 'react-feather'
  
export default function CustomerMenu() {
  return (
    <div className='flex flex-row flex-nowrap items-center gap-5'>
      <Cart/>
      <Wishlist/>
      <Link
        href={'/account'}>
          <User/>
      </Link>
    </div>
  )
}
