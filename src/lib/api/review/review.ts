
async function fetchProductReviews(product_id: string) {
  const response = await fetch(process.env.API_URL + '/client/review/product-reviews', {
    method: 'POST',
    //@ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({review: {product_id}}),
  })
  const data = await response.json()
  return data
}

export {
  fetchProductReviews
}