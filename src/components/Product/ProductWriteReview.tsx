'use client'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { ChangeEvent, useState } from 'react'
import { createReview } from '@/lib/api/review/review'
import ProductRate from './Rating'
import Rating from './Rating'

export default function ProductWriteReview({product_id, addProductReview}: {product_id: string, addProductReview: (review: Review) => void}) {
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(1)

  function handleSend(review: Review) {
    createReview(review)
    addProductReview({...review, customer_id: 'state_bound_review'})
  }

  function handleClick() {
    handleSend(
      {
        rating,
        comment,
        product_id
      }
    )
  }
  
  function handleRating(rate: number) {
    setRating(rate)
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
        <Rating initialState={1} rateOutOf={5} handleRating={handleRating}></Rating>
        <Textarea onChange={handleTextChange}></Textarea>
        <Button onClick={handleClick}>Send</Button>
      </CardContent>
    </Card>
  )
}
