'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function InfoCard({customer}: {customer: Customer}) {
  const [info, setInfo] = useState<any>({})
  useEffect(() => {
    setInfo(customer)
  },[])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          Object.values(info).length > 0 ? 
          <div>
            <p>{info.name}</p>
            <p>{info.last_name}</p>
            <p>{info.gender}</p>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <p>{`${info.is_active}`}</p>
          </div> :
          <div>Loading...</div>
        }
      </CardContent>
    </Card>
  )
}
