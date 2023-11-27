"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { getProductImages } from '@/lib/s3/fetchProductImages'
import Image from 'next/image'
import product_placeholder from "../../../public/images/product_placeholder.jpg"
import Link from 'next/link'
export default function ProductCard({product}: {product: any}) {
  const {name, description, price, id} = product
  const [images, setImages] = useState()

  useEffect(() =>  {
    getProductImages({id: product.id}).then((images) => {
      setImages(images)
    })
  }, [])

  return (
      <Card className='w-1/5 max-lg:w-1/4 max-md:w-1/3 max-sm:w-1/2 aspect-[2/3] flex flex-col box-border p-3'>
        <CardContent className='flex-grow rounded flex items-center content-center'>
          <Image
            src={images ? images[0] : product_placeholder}
            alt='product_img'
            width={300}
            height={300}
          />
        </CardContent>
        <Link
          href={{
          pathname: `/product/${id}`,
          query: {id, name}
          }}>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <p>{price}$</p>
          </CardHeader>
        </Link>
        <CardFooter>
          <Button>Add To Cart</Button>
        </CardFooter>
      </Card>
  )
}
