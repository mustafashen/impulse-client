'use server'
import { getCookie } from "@/lib/cookies/cookieMethods"

async function listCartLines(cart_id: string) {

  const token = (await getCookie('customer_access_token'))?.value
  if (!token) throw "No customer access token"

  const response = await fetch(process.env.API_URL + '/client/cart/list', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      cart_id
    })
  })

  const data = await response.json()
  return data
}

async function createCartLine({cart_id, product_id, quantity}: {cart_id: string, product_id: string, quantity: number}) {

  const token = (await getCookie('customer_access_token'))?.value
  if (!token) throw "No customer access token"

  const response = await fetch(process.env.API_URL + '/client/cart/line-create', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      cart_line: {
        cart_id,
        product_id,
        quantity
      }
    })
  })

  const data = await response.json()
  return data
}

async function deleteCartLine({id, cart_id}: {id: string, cart_id: string}) {

  const token = (await getCookie('customer_access_token'))?.value
  if (!token) throw "No customer access token"

  const response = await fetch(process.env.API_URL + '/client/cart/line-delete', {
    method: 'DELETE',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      cart_line: {
        id,
        cart_id
      }
    })
  })

  const data = await response.json()
  return data
}

async function updateCartLine({id, cart_id, updates}: {id: string, cart_id: string, updates: {quantity: number}}) {

  const token = (await getCookie('customer_access_token'))?.value
  if (!token) throw "No customer access token"

  const response = await fetch(process.env.API_URL + '/client/cart/line-update', {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({
      cart_line: {
        id,
        cart_id,
        updates
      }
    })
  })

  const data = await response.json()
  return data
}

export {
  listCartLines,
  createCartLine,
  deleteCartLine,
  updateCartLine
}