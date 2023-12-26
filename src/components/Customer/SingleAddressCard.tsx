import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { deleteCustomerAddress } from '@/lib/api/address/address'
import UpdateSingleAddressDialog from './UpdateSingleAddressDialog'

export default function SingleAddressCard({address}: {address: AddressType}) {
  
  const handleDeleteAddress = async (address_id?: string) => {
    if (address_id) {
      deleteCustomerAddress(address_id)
    }
  }


  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {address.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>{address.country}</div>
        <div>{address.city}</div>
        <div>{address.district}</div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => handleDeleteAddress(address.id)}>Delete</Button>
        <UpdateSingleAddressDialog current_address={address}/>
      </CardFooter>
    </Card>
  )
}
