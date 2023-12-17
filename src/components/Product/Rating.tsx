'use client'
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"


export default function Rating({initialState, rateOutOf, handleRating}: {initialState: number, rateOutOf: number, handleRating: (rate: number) => void}) {
  
  const [currentRate, setCurrentRate] = useState(initialState)
  const [rate, setRate] = useState(Array(rateOutOf)
    .fill(0)
    .map((r: 0 | 1, idx) => {
      if (idx < currentRate) {
        return 1
      }
    }))
  
  useEffect(() => {
    setRate(Array(rateOutOf)
      .fill(0)
      .map((r: 0 | 1, idx) => {
        if (idx < currentRate) {
          return 1
        }
      }))
  }, [currentRate])

  const handleChangeRate = (idx: number) => {
    setCurrentRate(idx)
    handleRating(idx)
  }
  
  return (
    <div className='flex flex-row flex-nowrap'>
      {
        rate.map((r, idx) => {
          return <button 
                    key={`rate_input_${idx}`} 
                    onClick={() => handleChangeRate(idx + 1)}
                    className="hover:-translate-y-1 ">
            {
              r === 1 ? <StarFilledIcon /> : <StarIcon />
            }
          </button>
        })
      }
    </div>
  )
}
