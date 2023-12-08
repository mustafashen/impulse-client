import ProductCarousel from '@/components/Product/ProductCarousel'
import ProductInfo from '@/components/Product/ProductInfo'
import ProductReviews from '@/components/Product/ProductReviews'
import { fetchProductsById } from '@/lib/api/product/product'
import { fetchProductReviews } from '@/lib/api/review/review'
import { getProductImages } from '@/lib/s3/fetchProductImages'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ searchParams }: {searchParams:{name: string, id: string}}): Promise<Metadata> {
  return {
    title: searchParams.name
  }
}

export default async function page(props: {searchParams:{name: string, id: string}}) {
  const {searchParams} = props
  const {name, id} = searchParams
  
  const productData = await fetchProductsById(id)
  const reviewData = await fetchProductReviews(id)
  const images = await getProductImages({id})

  return (
    <div className='flex flex-col flex-nowrap'>
      <div className='flex flex-row'>
        <div className='w-1/2'>
          <ProductCarousel images={images}/>
        </div>
        <div>
          <ProductInfo productInfo={{...productData[0], images}}/>
        </div>
      </div>
      <div>
        <h1>Reviews</h1>
        <div>
          <ProductReviews reviews={reviewData}/>
        </div>
      </div>
    </div>
  )
}
