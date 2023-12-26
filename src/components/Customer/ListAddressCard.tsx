import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { fetchCustomerAddress } from '@/lib/api/address/address'
import SingleAddressCard from './SingleAddressCard'

export default function ListAddressCard() {
  const [addresses, setAddresses] = useState<AddressType[]>([])
  useEffect(() => {
    const handleFetchAdresses = async () => {
      const res = await fetchCustomerAddress()
      setAddresses(res)
    }
    handleFetchAdresses()
  },[])

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          List Address
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          addresses.map((address: AddressType) => {
            return (<SingleAddressCard key={address.id} address={address}/>)
          })
        }
      </CardContent>
    </Card>
  )
}
