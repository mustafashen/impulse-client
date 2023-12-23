'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'

export default function ReviewsCard({getCustomerReview, customer}: {getCustomerReview: (id: string) => any, customer: Customer}) {
  const [reviews, setReviews] = useState<any>([])

  useEffect(() => {
    const loadReview = async () => {
      const review = await getCustomerReview(customer.id)
      setReviews(review)
    }
    loadReview()
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
