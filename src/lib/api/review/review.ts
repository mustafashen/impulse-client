'use server'

import { getCookie } from "@/lib/cookies/cookieMethods"

async function fetchProductReviews(product_id: string) {
  const response = await fetch(process.env.API_URL + '/client/review/product-reviews', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({review: {product_id}}),
  })
  const data = await response.json()
  return data
}

async function fetchCustomerReviews(id: string) {
  const response = await fetch(process.env.API_URL + '/client/review/customer-reviews', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({review: {customer_id: id}})
  })

  const data = await response.json()
  return data
}

async function createReview(review: Review) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

  const response = await fetch(process.env.API_URL + '/client/review/create', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({review})
  })

  const data = await response.json()
  return data

  } catch (error: any) {
    return {Error: error}
  }
}

async function deleteReview(id: string) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const response = await fetch(process.env.API_URL + '/client/review/delete', {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({review: {id}})
    })

    const data = await response.json()
    return data

  } catch (error: any) {
    return {Error: error}
  }
}

async function updateReview(id: string, updates: Review) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"

    const response = await fetch(process.env.API_URL + '/client/review/update', {
      method: 'DELETE',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({review: {id, updates}})
    })

    const data = await response.json()
    return data

  } catch (error: any) {
    return {Error: error}
  }
}


export {
  fetchProductReviews,
  fetchCustomerReviews,
  createReview,
  deleteReview,
  updateReview
}