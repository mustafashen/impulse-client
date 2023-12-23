'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Rating from "../Product/Rating"
import { Textarea } from "../ui/textarea"
import { ChangeEvent, useEffect, useState } from "react"
import { DialogClose } from "@radix-ui/react-dialog"

export default function ReviewUpdate({handleUpdate, currentComment, currentRating}: {handleUpdate: (updates: {rating: number, comment: string}) => void, currentComment: string, currentRating: number}) {
  const [rating, setRating] = useState(1)
  const [comment, setComment] = useState("")

  useEffect(() => {
    setRating(currentRating)
    setComment(currentComment)
  },[])

  const handleRating = (rating: number) => {
    setRating(rating)
  }

  const handleComment = (e: ChangeEvent) => {
    //@ts-ignore
    setComment(e.target.value)
  }

  const handleSubmit = () => {
    handleUpdate({
      rating,
      comment
    })
  }
  
  return (
    <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit review</DialogTitle>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Rating
        </Label>
        <Rating initialState={rating} handleRating={handleRating} rateOutOf={5}/>
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="comment" className="text-right">
          Comment
        </Label>
        <Textarea id="comment" className="col-span-3" value={comment} onChange={handleComment}/>
      </div>
    </div>
    <DialogFooter>
      <DialogClose>
        <Button type="submit" onClick={handleSubmit}>Save changes</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
  )
}
