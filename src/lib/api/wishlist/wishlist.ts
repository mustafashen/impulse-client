'use server'
import { getCookie, setCookie } from "@/lib/cookies/cookieMethods"
import { redirect } from "next/navigation"

async function listWishlistLines() {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const wishlist_id = (await getCookie('customer_wishlist_id'))?.value
    if (!wishlist_id) throw "No wishlist found"
  
    const response = await fetch(process.env.API_URL + '/client/wishlist/list', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        wishlist: {
          id: wishlist_id
        }
      })
    })
  
    const data = await response.json()
    console.log('LIST_WISHLIST', data)
    return data
  } catch (error) {
    console.log({Error: error})
    return []
  }

}

async function fetchWishlistLine(wishlist_line: {id: string}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const response = await fetch(process.env.API_URL + '/client/wishlist/line', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        wishlist_line
      })
    })

    const data = await response.json()
    console.log('LINE_WISHLIST', data)
    return data
  } catch (error) {
    return {Error: error}
  }
}



async function createWishlist() {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) {
      redirect('/access')
    }

    const response = await fetch(process.env.API_URL + '/client/wishlist/create', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Authorization': token
      }
    })

    const data = await response.json()
    console.log('CREATE_WISHLIST', data)
    setCookie('customer_wishlist_id', data.wishlist_id)
    return data
  } catch (error) {
    return {Error: error}
  }
}

async function toggleWishlistLine({product_id}: {product_id: string}) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) {
      redirect('/access')
    }
    
    const wishlist_id = (await getCookie('customer_wishlist_id'))?.value ? 
      (await getCookie('customer_wishlist_id'))?.value :
      (await createWishlist())?.wishlist_id
    if (!wishlist_id) throw "No wishlist found"
  
    const response = await fetch(process.env.API_URL + '/client/wishlist/line-toggle', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        wishlist_line: {
          wishlist_id,
          product_id,
        }
      })
    })
  
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
  }
}

export {
  toggleWishlistLine,
  createWishlist,
  listWishlistLines,
  fetchWishlistLine
}