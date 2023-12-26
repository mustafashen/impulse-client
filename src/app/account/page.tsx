import InfoCard from "@/components/Customer/InfoCard"
import { fetchCustomerInfo } from "@/lib/api/customer/customer"
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
import SettingsCard from "@/components/Customer/SettingsCard"
import TabsView from "@/components/Customer/TabsView"

export default async function page() {
  const accessToken = (await getCookie('customer_access_token'))?.value
  if (!accessToken) {
    redirect('/access')
  }
  
  return (
    <div>
      <TabsView accessToken={accessToken}/>
    </div>
  )
}
