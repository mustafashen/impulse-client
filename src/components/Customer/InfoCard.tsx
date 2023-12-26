'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { logoutCustomer } from '@/lib/api/customer/customer'
import { deleteCookie } from '@/lib/cookies/cookieMethods'

export default function InfoCard({customer}: {customer: any}) {

  const handleLogout = async () => {
    logoutCustomer()
  }

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
      <Button onClick={handleLogout}>Logout</Button>
    </Card>
  )
}
