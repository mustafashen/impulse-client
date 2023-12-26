import { getCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from 'next/navigation'
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
