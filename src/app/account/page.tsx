import { getCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from 'next/navigation'

export default function page() {
  const accessToken = getCookie('customer_access_token')
  if (!accessToken) {
    redirect('/access')
  }
  return (
    <div></div>
  )
}
