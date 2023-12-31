'use server'

import { redirect } from "next/navigation"


function redirectToAccess() {
  redirect('/access')
}

export {
  redirectToAccess
}