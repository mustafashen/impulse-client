'use server'

async function fetchAllCategories() {
  const response = await fetch(process.env.API_URL + '/client/category/all', { cache: 'no-store' })
  const data = await response.json()
  return data
}

export {
  fetchAllCategories
}