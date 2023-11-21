"use client"
import React, { useEffect } from 'react'
import DesktopNavbar from './DesktopNavbar/DesktopNavbar'
import MobileNavbar from './MobileNavbar/MobileNavbar'
import { fetchAllCategories } from '@/lib/api/navbar/category'
import { CategoriesContextProvider } from '@/contexts/CategoryContext'

export default function Navbar() {

  return (
    <>
      <CategoriesContextProvider>
        <>
          <DesktopNavbar/>
          <MobileNavbar/>
        </>
      </CategoriesContextProvider>
    </>
  )
}
