'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function ReviewsCard({getCustomerReview, customer}: {getCustomerReview: (id: string) => any, customer: Customer}) {
  const [review, setReview] = useState<any>([])
  useEffect(() => {
    const loadReview = async () => {
      const review = await getCustomerReview(customer.id)
      setReview(review)
    }
    loadReview()
  },[])
  
  return (
    <div>
      {
        review ? 
        review.map((review: Review) => {
          return (
            <Card key={review.id}>
            <CardHeader>
              <div className='flex flex-row flex-nowrap'>
              {
                Array.from({length: review.rating}, (el, idx) => <StarFilledIcon key={idx + '_' + review.id}/>)
                     .map((star: ReactElement) => star)
              }
              </div>
            </CardHeader>
            <CardContent>
              {review.comment}
            </CardContent>
          </Card>
          )
        }) :
        <div>Loading...</div>
      }
    </div>
  )
}
