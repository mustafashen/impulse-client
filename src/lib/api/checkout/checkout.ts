import { getCookie } from "@/lib/cookies/cookieMethods"

async function cartCheckout(cart_id: string) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
  
    const response = await fetch(process.env.API_URL + '/client/checkout/cart', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Authorization': token
      },
      body: JSON.stringify({
        cart: {
          cart_id
        }
      })
    })
  
    const data = await response.json()
    return data

  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}