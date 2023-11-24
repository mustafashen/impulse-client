
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { getProductImages } from '@/lib/s3/fetchProductImages'
import Image from 'next/image'

export default function ProductCard({product}: {product: any}) {
  const {name, description, price} = product
  const [images, setImages] = useState()

  useEffect(() =>  {
    getProductImages({id: product.id}).then((images) => {
      setImages(images)
    })
  }, [])
  return (
      <Card className='w-1/5 max-lg:w-1/4 max-md:w-1/3 max-sm:w-1/2 aspect-[2/3] flex flex-col'>
        <CardContent className='flex-grow'>
          <Image
            src={images ? images[0] : ''}
            alt='product_img'
            width={300}
            height={300}
          />
        </CardContent>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <p>{price}$</p>
        </CardHeader>
        <CardFooter>
          <Button>Add To Cart</Button>
        </CardFooter>
      </Card>
  )
}
