'use server'

async function fetchAllProducts() {
  const response = await fetch('http://localhost:3001/client/product/all', { cache: 'no-store' })
  const data = await response.json()
  return data
}

export {
  fetchAllProducts
}