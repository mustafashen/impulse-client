import React from 'react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useCategoriesContext } from '@/contexts/CategoryContext'

export default function SubCategory({parent_id}: {parent_id: string}) {
  const categories = useCategoriesContext()
  const subCategories = categories.filter((category: any) => category.parent_id === parent_id)
  return (
    <ul>
      {
      subCategories.map((category: any) => {
        const sub_parent_id = category.id
        const sub_subCategories = categories.filter((category: any) => category.parent_id === sub_parent_id)

        if (sub_subCategories.length > 0) {
          return (
          <AccordionItem value={category.id} key={category.id}>
            <AccordionTrigger>{category.name}</AccordionTrigger>
            <AccordionContent>
              <SubCategory parent_id={category.id}/>
            </AccordionContent>
          </AccordionItem>
          )
        } else {
          return (
            <div key={category.id} className='py-2'>
              {category.name}
            </div>
          )
        }
      })
      }
    </ul>
  )
}
