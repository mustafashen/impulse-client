"use client"
import React from 'react'
import CategoryMenu from './CategoryMenu'
import CustomerMenu from './CustomerMenu'
import Logo from '../Logo'

export default function DesktopNavbar() {
  return (
    <div className='flex flex-row no-wrap w-screen justify-between max-lg:hidden'>
        <div className='flex flex-row no-wrap'>
          <Logo/>
          <CategoryMenu/>
        </div>
      <CustomerMenu/>
    </div>
  )
}
