import ProductCarousel from '@/components/Product/ProductCarousel'
import ProductInfo from '@/components/Product/ProductInfo'
import ProductReview from '@/components/Product/ProductReview'
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
    <div className='flex flex-col flex-nowrap'>
      <div className='flex flex-row'>
        <div className='w-1/2'>
          <ProductCarousel product_id={id}/>
        </div>
        <div>
          <ProductInfo productInfo={productData[0]}/>
        </div>
      </div>
      <div>
        <ProductReview reviews={reviewData}/>
      </div>
    </div>
  )
}
