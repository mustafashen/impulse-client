'use server'

async function fetchAllProducts() {
  try {
    const response = await fetch(process.env.API_URL + '/client/product/all', { cache: 'no-store' })
    const data = await response.json()
    return data
  } catch (error) {
    return {Error:error}
  }
}

async function fetchProductsByCategory(category: {category_id: string}) {
  try {
    const response = await fetch(process.env.API_URL + '/client/product/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({category: category}),
    })
    const data = await response.json()
    return data
  } catch (error) {
    return {Error: error}
  }
}

async function fetchProductsById(id: string) {
  try {
    const response = await fetch(process.env.API_URL + '/client/product/id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({category: {id}}),
    })
    const data = await response.json()
    return data
  } catch (error) {
    return {Error: error}
  }
}

export {
  fetchAllProducts,
  fetchProductsByCategory,
  fetchProductsById,
}