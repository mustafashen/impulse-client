import { useCategoriesContext } from '@/contexts/CategoryContext'
import Link from 'next/link'
import React from 'react'

export default function SubCategory({parent_id}: {parent_id: string}) {
  const categories = useCategoriesContext()
  const subCategories = categories.filter((category: Category) => category.parent_id === parent_id)
  return (
    <ul>
    {
    subCategories.map((category: Category) => {
      return (
      <li key={category.id} className='flex flex-row flex-nowrap'>
        <Link
          href={{
          pathname: `/category/${category.name}`,
          query: {id: category.id, name: category.name}
          }}>
          {category.name}
        </Link>
        <SubCategory parent_id={category.id}/>
      </li>)
    })
    }
    </ul>
  )
}
