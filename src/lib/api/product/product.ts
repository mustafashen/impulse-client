'use server'

async function fetchAllProducts() {
  const response = await fetch(process.env.API_URL + '/client/product/all', { cache: 'no-store' })
  const data = await response.json()
  return data
}

async function fetchProductsByCategory(category: any) {

  const response = await fetch(process.env.API_URL + '/client/product/category', {
    method: 'POST',
    //@ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
    body: JSON.stringify({category: category}),
  })
  const data = await response.json()
  return data

}

export {
  fetchAllProducts,
  fetchProductsByCategory
}