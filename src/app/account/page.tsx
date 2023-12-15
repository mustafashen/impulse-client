import InfoCard from "@/components/Customer/InfoCard"
import { fetchCustomerInfo, fetchCustomerOrder } from "@/lib/api/customer/customer"
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
import { fetchCustomerReviews } from "@/lib/api/review/review"

export default async function page() {
  const accessToken = getCookie('customer_access_token')
  if (!accessToken) {
    redirect('/access')
  }
  const {customer} = await fetchCustomerInfo(accessToken.value)

  async function getCustomerReview(id: string) {
    'use server'
    if (accessToken) {
      const reviews = await fetchCustomerReviews(id)
      return reviews
    } else {
      return {Error: "Customer review fetch failed."}
    }
  }

  // async function getCustomerOrder(id: string) {
  //   'use server'
  //   if (accessToken) {
  //     const {customer} = await fetchCustomerOrder(id, accessToken.value)
  //     return customer
  //   } else {
  //     return {Error: "Customer order fetch failed."}
  //   }
  // }


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
          <InfoCard customer={customer}/>
        </TabsContent>
        {/* <TabsContent value="orders">
          <OrdersCard getCustomerOrder={getCustomerOrder} customer={customer}/>
        </TabsContent> */}
        <TabsContent value="reviews">
          <ReviewsCard getCustomerReview={getCustomerReview} customer={customer}/>
        </TabsContent>
      </Tabs>
    </div>
  )
}
