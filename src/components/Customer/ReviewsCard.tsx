'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewsCard({getCustomerReview, customer}: {getCustomerReview: (id: string) => any, customer: Customer}) {
  const [review, setReview] = useState<any>([])

  useEffect(() => {
    const loadReview = async () => {
      const review = await getCustomerReview(customer.id)
      setReview(review)
    }
    loadReview()
  },[])
  
  const deleteStateReview = (id: string) => {
    setReview(review.filter((review: Review) => review.id !== id))
  }

  return (
    <div>
      {
        review ? 
        review.map((review: Review) => {
          return (
            <ReviewCard key={review.id} review={review} deleteStateReview={deleteStateReview}/>
          )
        }) :
        <div>Loading...</div>
      }
    </div>
  )
}
