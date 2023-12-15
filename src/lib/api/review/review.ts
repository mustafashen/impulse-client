
async function fetchProductReviews(product_id: string) {
  const response = await fetch(process.env.API_URL + '/client/review/product-reviews', {
    method: 'POST',
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

export {
  fetchProductReviews,
  fetchCustomerReviews
}