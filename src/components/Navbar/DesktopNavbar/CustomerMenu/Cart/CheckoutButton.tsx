import { Button } from '@/components/ui/button'
import { SheetFooter } from '@/components/ui/sheet'
import { cartCheckout } from '@/lib/api/checkout/checkout'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchCustomerAddress } from '@/lib/api/address/address'
import { ChangeEvent, useEffect, useState } from 'react'

export default function CheckoutButton({cart}: any) {
  const [addresses, setAddresses] = useState<AddressType[] | []>([])
  useEffect(() => {
    fetchCustomerAddress().then(res => {
      if (!res.Error || res.length > 0) {
        setAddresses(res)
      }
    })
  }, [])


  const [selectedAddress, setSelectedAddress] = useState<string>('')
  const handleAddressChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('something')
    setSelectedAddress(event.target.value)
  }

  return (
    <SheetFooter>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout Cart</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Card>
            <CardHeader>
              <CardDescription>
                Choose an address
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup>
              {
                addresses.map((address: AddressType) => {
                  if (address.id) {
                    return (
                      <Card className="flex items-center space-x-2 py-3" key={address.id}>
                        <RadioGroupItem value={address.id} id={address.id}/>
                        <Label htmlFor={address.id}>{address.title}</Label>
                      </Card>
                    )
                  }
                })
              }
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
        <DialogFooter>
          {
            cart?.cartItems.length && cart?.cartItems.length > 0? <Button onClick={() => cartCheckout(selectedAddress)}>Checkout</Button> : <></>
          }
        </DialogFooter>
      </DialogContent>
    </Dialog>

    </SheetFooter>
  )
}
