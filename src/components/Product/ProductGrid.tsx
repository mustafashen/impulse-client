'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { fetchAllProducts, fetchProductsByCategory } from '@/lib/api/product/product'

export default function ProductGrid({category}: {category: string}) {
  const [products, setProducts] = useState<any>([])
  
  useEffect(() => {
    async function fetchProducts() {
      const res = category === 'all' ? 
      await fetchAllProducts() : 
      await fetchProductsByCategory({category_id: category})

      setProducts(res)
    }

    fetchProducts()
  }, [])

  return (
    <div className='grid'>
      { 
        products.length > 0 ? 
        products.map((product: Product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        }) :
        null
      }
    </div>
  )
}
