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
import { loginCustomer } from "@/lib/api/customer/customer"
import { setCookie } from "@/lib/cookies/cookieMethods"

type LoginState = CustomerLogin | {}
export default function LoginTab() {
  const [login, setLogin] = useState<LoginState>({})
  const [loginMessage, setLoginMessage] = useState('')

  const handleLogin = async (state: LoginState) => {
    const res = await loginCustomer(state)
    if (res.Error) {
      setLoginMessage(res.Error.Server)
    } else {
      setCookie('customer_access_token', res.token)
    }
  }

  const handleChange = (event: any) => {
    const targetId = event.target.id
    setLogin({...login, [targetId]: event.target.value})
  }

  const handleClick = async () => {
    await handleLogin(login)
  }

  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your account here.
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
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Button onClick={handleClick}>Login</Button>
          <div className="text-red-700">{loginMessage}</div>
        </CardFooter>
      </Card>
    </TabsContent>
  )
}
