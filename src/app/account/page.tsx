import InfoCard from "@/components/Customer/InfoCard"
import { fetchCustomerInfo, fetchCustomerOrder, fetchCustomerReview } from "@/lib/api/customer/customer"
import { getCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from 'next/navigation'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import OrdersCard from "@/components/Customer/OrdersCard"
import ReviewsCard from "@/components/Customer/ReviewsCard"

export default async function page() {
  const accessToken = getCookie('customer_access_token')
  if (!accessToken) {
    redirect('/access')
  }
  
  async function getCustomerInfo() {
    'use server'
    if (accessToken) {
      const {customer} = await fetchCustomerInfo(accessToken.value)
      return customer
    } else {
      return {Error: "Customer info fetch failed."}
    }
  }

  async function getCustomerReview() {
    'use server'
    if (accessToken) {
      const {customer} = await fetchCustomerReview(accessToken.value)
      return customer
    } else {
      return {Error: "Customer review fetch failed."}
    }
  }

  async function getCustomerOrder() {
    'use server'
    if (accessToken) {
      const {customer} = await fetchCustomerOrder(accessToken.value)
      return customer
    } else {
      return {Error: "Customer order fetch failed."}
    }
  }


  // connect carts and wishlist to db
  // add checkout cart
  // add write review
  
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="flex flex-row flex-nowrap flex-grow-1 [&>*]:flex-grow">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <InfoCard getCustomerInfo={getCustomerInfo}/>
        </TabsContent>
        {/* <TabsContent value="orders">
          <OrdersCard getCustomerOrder={getCustomerOrder}/>
        </TabsContent> */}
        <TabsContent value="reviews">
          <ReviewsCard getCustomerReview={getCustomerReview}/>
        </TabsContent>
      </Tabs>
    </div>
  )
}
