'use client'
import { Button } from '../ui/button'
import { Heart, ShoppingCart } from 'react-feather'
import { useCartContext } from '@/contexts/CartContext'
import { useWishlistContext } from '@/contexts/WishlistContext'

export default function ProductInfo({productInfo} : {productInfo: Product}) {
  const {id, price, stock, description, features, name, images} = productInfo
  
  const {dispatchCartItems}: any = useCartContext()
  const {dispatchWishlistItems}: any = useWishlistContext()

  const listFeatures = () => {
    const keys = []
    for (const key in features) {
      keys.push(key)
    }
    return keys
  }
  
  return (
    <div>
      <h1 className='text-5xl font-bold'>{name}</h1>
      <h2 className='opacity-50'>{description}</h2>
      <p className='text-2xl'>$ {price}</p>
      <div className='flex flex-row flex-nowrap justify-center items-center gap-3'>
        <Button 
          onClick={() => dispatchCartItems({type: 'ADD', cartItem: {id, name, price, images}})}><ShoppingCart/>Add To Cart</Button>
        <Button
          onClick={() => dispatchWishlistItems({wishlistItem: {id, name, price, images}})}><Heart/></Button>
      </div>
      <p>In Stock: {stock}</p>
      <div>
        <ul>
        {
          listFeatures()
            .map((key: string) => {
              return <li key={key}>{key}: {features[key]}</li>
            })
        }
        </ul>
      </div>
  </div>
  )
}
