import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import CategoryMenu from './CategoryMenu'

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger>|||</SheetTrigger>
      <SheetContent side={'left'}>
        <CategoryMenu/>
      </SheetContent>
  </Sheet>
  )
}
