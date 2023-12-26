'use client'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import { createCustomerAddress } from '@/lib/api/address/address'

export default function CreateAddressCard() {
  const [address, setAddress] = useState({
    title: '',
    state: '',
    city: '',
    district: '',
    country: '',
    zip_code: '',
    address: '',
    phone: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [event.target.id]: event.target.value })
  }

  const handleAddressCreate = async (address: AddressType) => {
    const res = await createCustomerAddress(address)
    console.log(res)
  }

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline"><PlusIcon/>Create New Address</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create New Address</DialogTitle>
        <DialogDescription>
          Add a new address to your account
        </DialogDescription>
      </DialogHeader>
        <div>
          <div>
            <Label htmlFor='title'>Title</Label>
            <Input id='title' onChange={handleChange} value={address.title}/>
          </div>
          <div>
            <Label htmlFor='state'>State</Label>
            <Input id='state' onChange={handleChange} value={address.state}/>
          </div>
          <div>
            <Label htmlFor='city'>City</Label>
            <Input id='city' onChange={handleChange} value={address.city}/>
          </div>
          <div>
            <Label htmlFor='district'>District</Label>
            <Input id='district' onChange={handleChange} value={address.district}/>
          </div>
          <div>
            <Label htmlFor='country'>Country</Label>
            <Input id='country' onChange={handleChange} value={address.country}/>
          </div>
          <div>
            <Label htmlFor='zip_code'>Zip Code</Label>
            <Input id='zip_code' onChange={handleChange} value={address.zip_code}/>
          </div>
          <div>
            <Label htmlFor='address'>Address</Label>
            <Input id='address' onChange={handleChange} value={address.address}/>
          </div>
          <div>
            <Label htmlFor='phone'>Phone</Label>
            <Input id='phone' onChange={handleChange} value={address.phone}/>
          </div>
        </div>
      <DialogFooter>
        <Button type="submit" onClick={() => {handleAddressCreate(address)}}>Create Address</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}