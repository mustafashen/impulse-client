'use client'
import React, { useEffect, useState } from 'react'
import { getProductImages } from '@/lib/s3/fetchProductImages'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent } from '../ui/card'


export default function ProductCarousel({images} : {images: string[]}) {

  return (
    <div>
      {/* <Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel> */}
      <Carousel >
        <CarouselContent>
        {
          images.map((image: string, index: number) => {
            return (
              <CarouselItem 
                key={index}
                className='flex flex-row justify-center items-center'>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image 
                    src={image} 
                    alt={image}
                    width={300}
                    height={300} />
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })
        }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
