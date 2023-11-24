import React from 'react'
import ProductCard from './ProductCard'
import { useProductsContext } from '@/contexts/ProductContext'

export default function ProductGrid() {
  const products = useProductsContext()

  const listProducts = () => {
    if (!products || !products.length)
      return null

    return products.map((product: any) => {
      return (
        <ProductCard key={product.id} product={product} />
      )
    })
  }

  return (
    <div className='grid'>
      {listProducts()}
    </div>
  )
}
