import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import SignupTab from "./SignupTab"
import LoginTab from "./LoginTab"

export default function AccessCard() {



  return (
    <Tabs defaultValue="signup" className="w-[400px] m-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
        <TabsTrigger value="login">Login</TabsTrigger>
      </TabsList>
      <SignupTab/>
      <LoginTab/>
    </Tabs>
  )
}
