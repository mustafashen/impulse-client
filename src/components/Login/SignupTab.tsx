'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  TabsContent,
} from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { signupCustomer } from "@/lib/api/customer/customer"

type SignupState = Customer | {}
export default function SignupTab() {
  const [signup, setSignup] = useState<SignupState>({})

  const handleSignup = async (state: SignupState) => {
    const res = await signupCustomer(state)
    console.log(res.status)
  }

  const handleChange = (event: any) => {
    const targetId = event.target.id
    setSignup({...signup, [targetId]: event.target.value})
  }

  const handleClick = () => {
    handleSignup(signup)
  }

  return (
    <TabsContent value="signup">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Create an account here.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" 
              onChange={handleChange}/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" 
              onChange={handleChange}/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="name">First Name</Label>
            <Input id="name" type="text" 
              onChange={handleChange}/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="last_name">Last Name</Label>
            <Input id="last_name" type="text" 
              onChange={handleChange}/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={handleChange}/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="birth_date">Birth Date</Label>
            <Input id="birth_date" type="date"
              onChange={handleChange}/>
          </div>
          <div className="space-y-1">
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" type="text"
              onChange={handleChange}/>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleClick}>Create Account</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}
