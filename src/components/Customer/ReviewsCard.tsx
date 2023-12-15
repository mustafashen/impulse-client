'use client'
import React, { useEffect, useState } from 'react'

export default function ReviewsCard({getCustomerReview, customer}: {getCustomerReview: (id: string) => any, customer: Customer}) {
  const [review, setReview] = useState<any>({})
  useEffect(() => {
    const loadReview = async () => {
      const review = await getCustomerReview(customer.id)
      console.log(review)
      // setReview(review)
    }
    loadReview()
  },[])
  
  return (
    <div>
      
    </div>
  )
}
