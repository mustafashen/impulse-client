'use client'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { ChangeEvent, useState } from 'react'
import { createReview } from '@/lib/api/review/review'

export default function ProductWriteReview({product_id}: {product_id: string}) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState<1|2|3|4|5>(5)

  function handleSend(review: Review) {
    createReview(review)
  }

  function handleClick() {
    console.log('clicked')
    handleSend(
      {
        rating,
        comment,
        product_id
      }
    )
  }

  function handleTextChange(e: ChangeEvent) {
    //@ts-ignore
    setComment(e.target.value)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Write a review:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea onChange={handleTextChange}></Textarea>
        <Button onClick={handleClick}>Send</Button>
      </CardContent>
    </Card>
  )
}
