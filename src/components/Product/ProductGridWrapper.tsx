'use client'
import { ProductsContextProvider } from '@/contexts/ProductContext'
import React from 'react'
import ProductGrid from './ProductGrid'

export default function ProductGridWrapper() {
  return (
    <div>
      <ProductsContextProvider>
        <ProductGrid/>
      </ProductsContextProvider>
    </div>
  )
}
