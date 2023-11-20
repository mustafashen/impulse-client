"use client"
import React, { useEffect } from 'react'
import DesktopNavbar from './DesktopNavbar/DesktopNavbar'
import MobileNavbar from './MobileNavbar/MobileNavbar'
import { fetchAllCategories } from '@/lib/api/navbar/category'

export default function Navbar() {

  return (
    <>
      <DesktopNavbar/>
      <MobileNavbar/>
    </>
  )
}
