'use server'
import { getCookie, setCookie } from "@/lib/cookies/cookieMethods"

async function listCartLines() {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const cart_id = (await getCookie('customer_cart_id'))?.value
    if (!cart_id) throw "No cart found"
  
    const response = await fetch(process.env.API_URL + '/client/cart/list', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        cart: {
          cart_id
        }
      })
    })
  
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

async function createCartLine({product_id, quantity}: {product_id: string, quantity: number}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const cart_id = (await getCookie('customer_cart_id'))?.value ? 
    (await getCookie('customer_cart_id'))?.value :
    (await createCart())?.cart_id
    if (!cart_id) throw "No cart found"

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
  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}


async function createCart() {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No access token found"

    const response = await fetch(process.env.API_URL + '/client/cart/create', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Authorization': token
      }
    })

    const data = await response.json()
    setCookie('customer_cart_id', data.cart_id)
    return data
  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

async function deleteCartLine({id}: {id: string}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No access token found"
    
    const cart_id = (await getCookie('customer_cart_id'))?.value ? 
    (await getCookie('customer_cart_id'))?.value :
    (await createCart())?.cart_id
    if (!cart_id) throw "No cart found"

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
  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

async function updateCart(updates: {address_id?: string, location?: string}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No access token found"
    
    const cart_id = (await getCookie('customer_cart_id'))?.value ? 
    (await getCookie('customer_cart_id'))?.value :
    (await createCart())?.cart_id
    if (!cart_id) throw "No cart found"

    const response = await fetch(process.env.API_URL + '/client/cart/update', {
      method: 'PUT',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        cart: {
          id: cart_id,
          updates
        }
      })
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

async function updateCartLine({id, updates}: {id: string, updates: {quantity: number}}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const cart_id = (await getCookie('customer_cart_id'))?.value ? 
    (await getCookie('customer_cart_id'))?.value :
    (await createCart())?.cart_id
    if (!cart_id) throw "No cart found"

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
  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

export {
  listCartLines,
  createCartLine,
  deleteCartLine,
  updateCartLine,
  createCart,
  updateCart
}