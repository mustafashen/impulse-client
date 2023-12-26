'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function InfoCard({customer}: {customer: any}) {


  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          Object.keys(customer).length > 0 ? 
          <div>
            <p>{customer.name}</p>
            <p>{customer.last_name}</p>
            <p>{customer.gender}</p>
            <p>{customer.email}</p>
            <p>{customer.phone}</p>
            <p>{`${customer.is_active}`}</p>
          </div> :
          <div>Loading...</div>
        }
      </CardContent>
    </Card>
  )
}
