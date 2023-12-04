import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import CategoryMenu from './CategoryMenu'
import { Menu } from 'react-feather'

export default function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu/>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <CategoryMenu/>
      </SheetContent>
    </Sheet>
  )
}
