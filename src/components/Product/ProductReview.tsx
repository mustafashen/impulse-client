import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { CardStackIcon, StarFilledIcon } from '@radix-ui/react-icons'

export default function ProductReview({reviews}: {reviews: any}) {
  
  return (
    <div>
      {
        reviews.map((review: any) => {
          return (
            <Card key={review.id}>
              <CardHeader>
                <CardTitle>Fetch customer name</CardTitle>
                <div className='flex flex-row flex-nowrap'>
                {
                  Array(review.rating).fill(<StarFilledIcon/>).map((star: any) => star)
                }
                </div>
              </CardHeader>
              <CardContent>
                {review.comment}
              </CardContent>
            </Card>
          )
        })
      }
    </div>
  )
}
