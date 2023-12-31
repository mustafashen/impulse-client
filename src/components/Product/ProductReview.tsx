'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { fetchCustomerName } from '@/lib/api/customer/customer'
import { reverse } from 'dns'

export default function ProductReview({review}: {review: Review}) {

  const [customerName, setCustomerName] = useState('')
  useEffect(() => {
    if (review.customer_id === 'state_bound_review') {
      setCustomerName('You')

    } else {
      const getCustomerName = async (customer_id: string) => {
        const res = await fetchCustomerName(customer_id)
        if (res.Error) {
          setCustomerName('[Deleted]')
        } else setCustomerName(res.customer.name)
      }

      if (review.customer_id)
        getCustomerName(review.customer_id)
    }
  }, [])

  return (
  <Card>
    <CardHeader>
      <CardTitle>
        {
          customerName
        }
      </CardTitle>
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
}
