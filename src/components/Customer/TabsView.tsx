'use client'
import InfoCard from "@/components/Customer/InfoCard"
import { fetchCustomerInfo } from "@/lib/api/customer/customer"
import { deleteCookie, getCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from 'next/navigation'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import OrdersCard from "@/components/Customer/OrdersCard"
import ReviewsCard from "@/components/Customer/ReviewsCard"
import { fetchCustomerReviews } from "@/lib/api/review/review"
import SettingsCard from "@/components/Customer/SettingsCard"
import { useEffect, useState } from "react"

export default function TabsView({accessToken}: {accessToken: string}) {
  const [customer, setCustomer] = useState({})
  useEffect(() => {
    const handleSetCustomer = async () => {
      const res = await fetchCustomerInfo(accessToken)
      if (res.customer) {
        setCustomer(res.customer)
      } else 
        deleteCookie('customer_access_token')
    }
    handleSetCustomer()
  },[])
  return (
    <Tabs defaultValue="account" className="w-[400px]">
    <TabsList className="flex flex-row flex-nowrap flex-grow-1 [&>*]:flex-grow">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="orders">Orders</TabsTrigger>
      <TabsTrigger value="reviews">Reviews</TabsTrigger>
      <TabsTrigger value="address">Addresses</TabsTrigger>
      <TabsTrigger value="settings">Settings</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <InfoCard customer={customer}/>
    </TabsContent>
    {/* <TabsContent value="orders">
      <OrdersCard getCustomerOrder={getCustomerOrder} customer={customer}/>
    </TabsContent> */}
    <TabsContent value="reviews">
      <ReviewsCard customer={customer}/>
    </TabsContent>
    <TabsContent value="address">
      <></>
    </TabsContent>
    <TabsContent value="settings">
      <SettingsCard/>
    </TabsContent>
  </Tabs>
  )
}
