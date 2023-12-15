'use server'

async function fetchAllCategories() {
  const response = await fetch(process.env.API_URL + '/client/category/all', { cache: 'no-store' })

  if (response.status === 404) 
  return []

  const data = await response.json()
  return data
}

export {
  fetchAllCategories
}