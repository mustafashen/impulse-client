import InfoCard from "@/components/Customer/InfoCard"
import { fetchCustomerInfo } from "@/lib/api/customer/customer"
import { getCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from 'next/navigation'

export default async function page() {
  const accessToken = getCookie('customer_access_token')
  if (!accessToken) {
    redirect('/access')
  }
  const info = await fetchCustomerInfo(accessToken.value)
  // create a tab view
  // info tab
  // reveiws tab
  // orders tab

  // connect carts and wishlist to db
  // add checkout cart
  // add write review
  return (
    <div>
      <InfoCard
        info={info}/>
    </div>
  )
}
