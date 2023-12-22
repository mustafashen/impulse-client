'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Cross1Icon, Pencil1Icon, StarFilledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { deleteReview, updateReview } from '@/lib/api/review/review'

export default function ReviewCard({review, deleteStateReview}: {review: Review, deleteStateReview: (id: string) => void}) {

  const handleDelete = (id: string) => {
    deleteReview(id)
    deleteStateReview(id)
  }

  const handleUpdate = (id: string, updates: Review) => {
    updateReview(id, updates)
  }
  
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
    <CardFooter>
      <Button onClick={() =>{review.id ? handleDelete(review.id) : null}}>
        <Cross1Icon/>
        Delete
      </Button>
      <Button>
        <Pencil1Icon/>
        Update
      </Button>
    </CardFooter>
  </Card>)
}
