'use server'

async function fetchAllCategories() {
  const response = await fetch('http://localhost:3001/client/category/all', { cache: 'no-store' })
  const data = await response.json()
  return data
}

export {
  fetchAllCategories
}