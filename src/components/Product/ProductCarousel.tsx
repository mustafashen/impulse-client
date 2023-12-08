'use client'
import React, { useEffect, useState } from 'react'
import Carousel from "nuka-carousel"
import { getProductImages } from '@/lib/s3/fetchProductImages'
import Image from 'next/image'


export default function ProductCarousel({images} : {images: string[]}) {

  return (
    <div>
      <Carousel >
        {
          images.map((image: string, index: number) => {
            return (
              <div 
                key={index}
                className='flex flex-row justify-center items-center'>
                <Image 
                src={image} 
                alt={image}
                width={300}
                height={300} />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}
