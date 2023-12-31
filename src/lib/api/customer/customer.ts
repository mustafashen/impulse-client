'use server'

import { deleteCookie, getCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from "next/navigation"

async function fetchCustomerName(customer_id: string) {
  try {
    const response = await fetch(process.env.API_URL + '/client/customer/name', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({customer: {id: customer_id}}),
    })
  
    const data = await response.json()
    return data
  } catch (error) {
    return {Error: error}
  }
}

async function fetchCustomerInfo(token: string) {
  try {
    const response = await fetch(process.env.API_URL + '/client/customer/info', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  
    const data = await response.json()
    return data
  } catch (error) {
    return {}
  }
}

async function fetchCustomerReview(token: string) {
  try {
    const response = await fetch(process.env.API_URL + '/client/review/customer-reviews', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  
    const data = await response.json()
    return data
  } catch (error) {
    return {Error: error}
  }
}

async function loginCustomer(customer: CustomerLogin | {}) {
  try {
    const response = await fetch(process.env.API_URL + '/client/customer/login', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({customer}),
    })
  
    const data = await response.json()
    return data
  } catch (error) {
    return {Error: error}
  }
}

async function signupCustomer(customer: Customer | {}) {
  try {
    const response = await fetch(process.env.API_URL + '/client/customer/signup', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({customer}),
    })
  
    const data = await response.json()
    if (data.Success) {
      redirect('/account')
    }
  } catch (error) {
    return {Error: error}
  }

}

async function logoutCustomer() {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const response = await fetch(process.env.API_URL + '/client/customer/logout', {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Authorization': 'Bearer ' + token
      },
    })

    const data = await response.json()
    if (data.Success) {
      deleteCookie('customer_access_token')  
      redirect('/account')
    }
  } catch (error) {
    return {Error: error}
  }
}

async function deleteCustomer(password: string) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const response = await fetch(process.env.API_URL + '/client/customer/delete', {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({password}),
    })

    const data = await response.json()

    if (data.Success) {
      await deleteCookie('customer_access_token')
      redirect('/')
    }

  } catch (error: any) {
    return {Error: error}
  }
}

async function updateCustomer({currentPassword, newPassword}: {currentPassword: string, newPassword: string}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const response = await fetch(process.env.API_URL + '/client/customer/update', {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        customer: {
          password: currentPassword,
          updates: {
            password: newPassword
          }
        }
      }),
    })

    const data = await response.json()

    if (data.Success) {
      await deleteCookie('customer_access_token')
      redirect('/')
    }

  } catch (error: any) {
    return {Error: error}
  }
}

export {
  fetchCustomerName,
  fetchCustomerInfo,
  fetchCustomerReview,
  loginCustomer,
  signupCustomer,
  logoutCustomer,
  deleteCustomer,
  updateCustomer
}