'use server'

import { getCookie } from "@/lib/cookies/cookieMethods"

async function fetchCustomerAddress() {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const response = await fetch(process.env.API_URL + '/client/address/list', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Authorization': token
      }
    })
  
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

async function createCustomerAddress(address: AddressType) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const response = await fetch(process.env.API_URL + '/client/address/create', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({address})
    })
  
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

async function deleteCustomerAddress(address_id: string) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const response = await fetch(process.env.API_URL + '/client/address/delete', {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({address: {address_id}})
    })
  
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

async function updateCustomerAddress({address_id, updates}: {address_id: string, updates: AddressType}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const response = await fetch(process.env.API_URL + '/client/address/update', {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'content-type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({address: {id: address_id, updates}})
    })
  
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

export {
  fetchCustomerAddress,
  createCustomerAddress,
  deleteCustomerAddress,
  updateCustomerAddress
}