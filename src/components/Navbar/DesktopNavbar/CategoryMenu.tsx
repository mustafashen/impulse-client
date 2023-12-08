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
import Link from 'next/link'


export default function CategoryMenu() {
  const categories = useCategoriesContext()

  const mainCategoryTemplate = (category: Category) => (
    <NavigationMenuItem key={category.id}>
      <NavigationMenuTrigger>{category.name}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          <SubCategory parent_id={category.id}/>
          <li>
            <Link
              href={{
              pathname: `/category/${category.name}`,
              query: {id: category.id, name: category.name}
              }}>
              All {category.name}
            </Link>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
  
  const renderCategories = (categories: Categories) => {
    if (!categories || !categories.length)
      return null

    const mainCategories = categories
      .filter((category: Category) => category.name === 'all')[0].id

    return categories.map((category: Category) => {
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
