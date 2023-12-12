'use client'
import React, { useEffect, useState } from 'react'

export default function ReviewsCard({getCustomerReview}: {getCustomerReview: () => any}) {
  const [review, setReview] = useState<any>({})
  useEffect(() => {
    const loadReview = async () => {
      const review = await getCustomerReview()
      console.log(review)
      setReview(review)
    }
    loadReview()
  },[])
  
  // add some reviews for the user to test
  return (
    <div>
      
    </div>
  )
}
