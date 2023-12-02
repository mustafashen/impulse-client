import React from 'react'
import { Button } from '../ui/button'
import { Heart, ShoppingCart } from 'react-feather'

export default function ProductInfo({productInfo} : any) {
  const {price, stock, description, features, name} = productInfo
  

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
        <Button><ShoppingCart/>Add To Cart</Button>
        <Button><Heart/></Button>
      </div>
      <p>In Stock: {stock}</p>
      <div>
        <ul>
        {
          listFeatures()
            .map((key: any) => {
              return <li key={key}>{key}: {features[key]}</li>
            })
        }
        </ul>
      </div>
  </div>
  )
}
