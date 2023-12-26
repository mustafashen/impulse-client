import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { PlusIcon } from "@radix-ui/react-icons"
import { updateCustomerAddress } from "@/lib/api/address/address"
import { useState } from "react"

export default function UpdateSingleAddressDialog({current_address}: {current_address: AddressType}) {
  const [address, setAddress] = useState<AddressType>({
    title: current_address.title,
    state: current_address.state,
    city: current_address.city,
    district: current_address.district,
    country: current_address.country,
    zip_code: current_address.zip_code,
    address: current_address.address,
    phone: current_address.phone,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [event.target.id]: event.target.value })
  }

  const handleAddressUpdate = async (address: AddressType) => {
    if (current_address.id)
      await updateCustomerAddress({address_id: current_address.id, updates: address})
  }

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Update</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Update Address</DialogTitle>
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
        <Button type="submit" onClick={() => {handleAddressUpdate(address)}}>Update Address</Button>  
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}
