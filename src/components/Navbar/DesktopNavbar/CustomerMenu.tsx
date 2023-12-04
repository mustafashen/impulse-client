'use client'
import Cart from './CustomerMenu/Cart'
import Wishlist from './CustomerMenu/Wishlist'
import Account from './CustomerMenu/Account'
  
export default function CustomerMenu() {
  return (
    <div className='flex flex-row flex-nowrap items-center gap-5'>
      <Cart/>
      <Wishlist/>
      <Account/>
    </div>
  )
}
