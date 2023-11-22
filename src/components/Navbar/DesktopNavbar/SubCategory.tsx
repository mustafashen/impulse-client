import { useCategoriesContext } from '@/contexts/CategoryContext'
import React from 'react'

export default function SubCategory({parent_id}: {parent_id: string}) {
  const categories = useCategoriesContext()

  const subCategories = categories.filter((category: any) => category.parent_id === parent_id)
  return (
    <ul>
    {
    subCategories.map((category: any) => {
      return (
      <li key={category.id}>
        {category.name}
        <SubCategory parent_id={category.id}/>
      </li>)
    })
    }
    </ul>
  )
}
