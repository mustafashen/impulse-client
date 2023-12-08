import ProductGrid from '@/components/Product/ProductGrid'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ searchParams }: {searchParams:{name: string, id: string}}): Promise<Metadata> {
  return {
    title: searchParams.name
  }
}

export default function page(props: {searchParams:{name: string, id: string}}) {
  const {searchParams} = props
  const {name, id} = searchParams

  return (
    <div>{name}
    <ProductGrid category={id}/>
    </div>
  )
}
