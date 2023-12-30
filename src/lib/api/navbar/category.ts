'use server'

async function fetchAllCategories() {
  try {
    const response = await fetch(process.env.API_URL + '/client/category/all', { cache: 'no-store' })

    if (response.status === 404) 
    return []
  
    const data = await response.json()
    return data
  } catch (error) {
    return {Error: error}
  }
}

export {
  fetchAllCategories
}