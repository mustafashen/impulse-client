'use client'
import { Button } from '../ui/button'
import {
  Dialog,
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
import { updateCustomer } from '@/lib/api/customer/customer'

export default function UpdatePasswordDialog() {

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  })


  async function handleChangePassword(currentPassword: string, newPassword: string) {
    await updateCustomer({currentPassword, newPassword})
  }

  function handleChange(e: ChangeEvent) {
    //@ts-ignore
    setPassword({...password, [e.target.id]: e.target.value})
  }

  return (
    <div>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Change Password</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]  ">
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
          <DialogDescription>
            This action cannot be reversed.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="currentPassword" className="text-right">
              Current Password
            </Label>
            <Input 
              id="currentPassword" 
              type='password' 
              className="col-span-3"
              value={password.currentPassword}
              onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="newPassword" className="text-right">
              New Password
            </Label>
            <Input 
              id="newPassword" 
              type='password' 
              className="col-span-3"
              value={password.newPassword}
              onChange={handleChange} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirmNewPassword" className="text-right">
              Confirm Password
            </Label>
            <Input 
              id="confirmNewPassword" 
              type='password' 
              className="col-span-3"
              value={password.confirmNewPassword}
              onChange={handleChange} />
          </div>
        </div>
        <DialogFooter>
          <Button 
            type="submit" 
            variant={"destructive"}
            onClick={() => handleChangePassword(password.currentPassword, password.newPassword)}>
              Change Password</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
  )
}
