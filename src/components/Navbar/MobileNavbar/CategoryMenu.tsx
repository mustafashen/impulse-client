import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useCategoriesContext } from '@/contexts/CategoryContext'
import SubCategory from './SubCategory'
import Link from 'next/link'

export default function CategoryMenu() {
  const categories = useCategoriesContext()
  
  const mainCategoryTemplate = (category: any) => (
    <AccordionItem value={category.id} key={category.id}>
      <AccordionTrigger>{category.name}</AccordionTrigger>
      <AccordionContent>
        <SubCategory parent_id={category.id} parent_name={category.name}/>
      </AccordionContent>
    </AccordionItem>
  )
  
  const listCategories = (categories: any) => {
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
    <Accordion type="multiple">
    {
      listCategories(categories)
    }
    </Accordion>
  )
}
