'use client'
import { useEffect, useState } from 'react'
import ProductReview from './ProductReview'
import ProductWriteReview from './ProductWriteReview'

export default function ProductReviews({reviews, product_id}: {reviews: Reviews, product_id: string,}) {
  const [productReviews, setProductReviews] = useState<Reviews>(reviews)

  useEffect(() => {
    setProductReviews(reviews)
  }, [])

  const addProductReview = (review: Review) => {
    setProductReviews([...productReviews, review])
  }

  return (
    <div>
      <ProductWriteReview
        product_id={product_id}
        addProductReview={addProductReview}/>
      {
        productReviews.map((review: Review) => {
          return (
            <ProductReview key={review.id} review={review}/>
          )
        })
      }
    </div>
  )
}
