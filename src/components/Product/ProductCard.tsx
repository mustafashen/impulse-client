
import React from 'react'
import { AspectRatio } from '../ui/aspect-ratio'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default function ProductCard({product}: {product: any}) {
  const {name, description, price} = product
  return (
      <Card className='w-1/5 max-lg:w-1/4 max-md:w-1/3 max-sm:w-1/2 aspect-[2/3] flex flex-col'>
        <CardContent className='flex-grow'>Insert Img here</CardContent>
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
