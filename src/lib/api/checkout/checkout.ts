'use server'
import { getCookie } from "@/lib/cookies/cookieMethods"
import { updateCart } from "../cart/cart"

async function cartCheckout(selectedAddress: string) {
  try {
    const token = (await getCookie('customer_access_token'))?.value
    if (!token) throw "No customer access token"
    
    const cart_id = (await getCookie('customer_cart_id'))?.value
    if (!cart_id) throw "No cart found"

    if (!selectedAddress || selectedAddress.length !== 36) throw "No proper address id selected"
    const addressUpdate = await updateCart({address_id: selectedAddress})

    if (addressUpdate.Error) throw "Could not set cart address"
    else if (addressUpdate.Success) {
      const response = await fetch(process.env.API_URL + '/client/checkout/cart', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          cart: {
            cart_id
          }
        })
      })

      const data = await response.json()
      return data
    }

    throw "Unexpected checkout error"

  } catch (error) {
    console.log(error)
    return {Error: error}
  }
}

export {
  cartCheckout
}