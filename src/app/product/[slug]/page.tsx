import { fetchProductsById } from '@/lib/api/product/product'
import { fetchProductReviews } from '@/lib/api/review/review'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ searchParams }: any): Promise<Metadata> {
  return {
    title: searchParams.name
  }
}

export default async function page(props: any) {
  const {searchParams} = props
  const {name, id} = searchParams
  
  // Handle 404 case for fetch responses

  const productData = await fetchProductsById(id)
  const {price, stock, description, features} = productData[0]

  const reviewData = await fetchProductReviews(id)
  

  return (
    <div>
      <div>
        <div>
          {/*Images carousel section*/}
        </div>
        <div>
          <ul>
            <li>{name}</li>
            <li>{price}</li>
            <li>{stock}</li>
            <li>{description}</li>
            {/* <li>{features}</li> map features and put them in a table*/}
          </ul>
        </div>
      </div>
      <div>
        {/*Reviews section*/}
      </div>
    </div>
  )
}
