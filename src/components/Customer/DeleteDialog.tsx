'use client'
import { Button } from '../ui/button'
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
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { ChangeEvent, useState } from 'react'
import { deleteCustomer } from '@/lib/api/customer/customer'

export default function DeleteDialog() {
  const [password, setPassword] = useState('')

  async function handleDeleteAccount(password: string) {
    await deleteCustomer(password)
  }

  function handleChange(e: ChangeEvent) {
    //@ts-ignore
    setPassword(e.target.value)
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost">Delete Account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]  ">
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              This action cannot be reversed.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input 
                id="password" 
                type='password' 
                className="col-span-3"
                value={password}
                onChange={handleChange} />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="submit" 
              variant={"destructive"}
              onClick={() => handleDeleteAccount(password)}>Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
