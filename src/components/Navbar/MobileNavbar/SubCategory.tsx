import React from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useCategoriesContext } from '@/contexts/CategoryContext'
import Link from 'next/link'
import { ChevronRight } from 'react-feather'

export default function SubCategory({parent_id, parent_name}: {parent_id: string, parent_name: string}) {
  const categories = useCategoriesContext()
  const subCategories = categories.filter((category: Category) => category.parent_id === parent_id)
  return (
    <ul>
      {
      subCategories.map((category: Category) => {
        const sub_parent_id = category.id
        const sub_subCategories = categories.filter((category: Category) => category.parent_id === sub_parent_id)

        if (sub_subCategories.length > 0) {
          return (
            <AccordionItem value={category.id} key={category.id}>
              <AccordionTrigger>{category.name}</AccordionTrigger>
              <AccordionContent>
                <SubCategory parent_id={category.id} parent_name={category.name}/>
              </AccordionContent>
            </AccordionItem>
          )
        } else {
          return (
            <>
              <AccordionItem 
                value={category.id} 
                key={category.id} 
                className='py-2'>
                <Link
                  href={{
                  pathname: `/category/${category.name}`,
                  query: {id: category.id, name: category.name}
                }}>
                  <span>{category.name}</span>
                  <ChevronRight className='inline'/>
                </Link>
              </AccordionItem>
              <AccordionItem 
                value={parent_name + '_all'} 
                key={parent_id + '_all'}
                className='py-2'>
                  <Link
                    href={{
                    pathname: `/category/${category.name}`,
                    query: {id: category.id, name: category.name}
                  }}>
                    <span>All {parent_name}</span>
                    <ChevronRight className='inline'/>
                  </Link>
              </AccordionItem>
            </>

          )
        }
      })
      }
    </ul>
  )
}
