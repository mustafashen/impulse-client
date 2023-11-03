import React from 'react'
import CustomerMenu from './CustomerMenu'
import Logo from '../Logo'
import HamburgerMenu from './HamburgerMenu'

export default function MobileNavbar() {
  return (
    <div className='flex-row no-wrap hidden max-lg:flex justify-between'>
      <div className='flex flex-row no-wrap'>
        <HamburgerMenu/>
        <Logo/>
      </div>
      <CustomerMenu/>
    </div>
  )
}
