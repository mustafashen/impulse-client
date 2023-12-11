import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function InfoCard({info}: {info: {customer: Customer}}) {
  const {customer} = info
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>{customer.name}</p>
          <p>{customer.last_name}</p>
          <p>{customer.gender}</p>
          <p>{customer.email}</p>
          <p>{customer.phone}</p>
          <p>{`${customer.is_active}`}</p>
        </div>
      </CardContent>
    </Card>
  )
}
