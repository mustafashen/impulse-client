import AccessCard from '@/components/Login/AccessCard'
import { getCookie } from '@/lib/cookies/cookieMethods'
import { redirect } from 'next/navigation'

export default function page() {
  if (getCookie('customer_access_token')?.value) {
    redirect('/account')
  }
  return (
    <div>
      <AccessCard/>
    </div>
  )
}
