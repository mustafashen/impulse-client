import React, { useEffect } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useCategoriesContext } from '@/contexts/CategoryContext'
import SubCategory from './SubCategory'

export default function CategoryMenu() {
  const categories = useCategoriesContext()

  const mainCategoryTemplate = (category: any) => (
    <NavigationMenuItem key={category.id}>
      <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <SubCategory parent_id={category.id}/>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
  
  const renderCategories = (categories: any) => {
    if (!categories || !categories.length)
      return null

    const mainCategories = categories
      .filter((category: any) => category.name === 'all')[0].id

    return categories.map((category: any) => {
      if (category.parent_id === mainCategories && category.name !== 'all') {
        return mainCategoryTemplate(category)
      } 
    })
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
      {
      renderCategories(categories)
      }
      </NavigationMenuList>
    </NavigationMenu>
  )
}
