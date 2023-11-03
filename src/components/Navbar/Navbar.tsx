"use client"
import React from 'react'
import DesktopNavbar from './DesktopNavbar/DesktopNavbar'
import MobileNavbar from './MobileNavbar/MobileNavbar'

export default function Navbar() {
  return (
    <>
      <DesktopNavbar/>
      <MobileNavbar/>
    </>
  )
}
