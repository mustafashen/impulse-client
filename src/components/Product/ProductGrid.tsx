import React from 'react'
import ProductCard from './ProductCard'
import { ProductsContextProvider, useProductsContext } from '@/contexts/ProductContext'

export default function ProductGrid() {
  const products = useProductsContext()
  
  const listProducts = () => {
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
