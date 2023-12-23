'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Cross1Icon, Pencil1Icon, StarFilledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { deleteReview, updateReview } from '@/lib/api/review/review'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import ReviewUpdate from './ReviewUpdate'

export default function ReviewCard({review, deleteStateReview, updateStateReview}: {review: Review, deleteStateReview: (id: string) => void, updateStateReview: (id: string, updates: {comment: string, rating: number}) => void}) {

  const handleDelete = (id: string) => {
    deleteReview(id)
    deleteStateReview(id)
  }

  const handleUpdate = (updates: {comment: string, rating: number}) => {
    if (review.id) {
      updateReview(review.id, updates)
      updateStateReview(review.id, updates)
    }
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
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Pencil1Icon/>
            Update
          </Button>
        </DialogTrigger>
        <ReviewUpdate handleUpdate={handleUpdate} currentComment={review.comment} currentRating={review.rating}/>
      </Dialog>
    </CardFooter>
  </Card>)
}
