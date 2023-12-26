'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import { fetchCustomerReviews } from '@/lib/api/review/review'

export default function ReviewsCard({customer}: {customer: Customer | {}}) {
  const [reviews, setReviews] = useState<any>([])

  useEffect(() => {
    async function getCustomerReview(id: string) {
      const reviews = await fetchCustomerReviews(id)
      return reviews
    }
    if (Object.keys(customer).includes('id')) {
      //@ts-ignore
      getCustomerReview(customer.id)
    }
  },[])
  
  const deleteStateReview = (id: string) => {
    setReviews(reviews.filter((review: Review) => review.id !== id))
  }

  const updateStateReview = (id: string, updates: {rating: number, comment: string}) => {
    const reviewsCopy = [...reviews]
    reviewsCopy.find((review: Review) => {
      if (review.id === id) {
        review.rating = updates.rating,
        review.comment = updates.comment
      }
    })
    setReviews(reviewsCopy)
  }

  return (
    <div>
      {
        reviews ? 
        reviews.map((review: Review) => {
          return (
            <ReviewCard key={review.id} review={review} deleteStateReview={deleteStateReview} updateStateReview={updateStateReview}/>
          )
        }) :
        <div>Loading...</div>
      }
    </div>
  )
}
