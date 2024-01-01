'use server'

import { redirect } from "next/navigation"


function redirectToAccess() {
  redirect('/access')
}


function redirectToCheckoutPage({checkout_url}: {checkout_url: string}) {
  redirect(checkout_url)
}

export {
  redirectToAccess,
  redirectToCheckoutPage
}