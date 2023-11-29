'use client'
import React, { useEffect, useState } from 'react'
import Carousel from "nuka-carousel"
import { getProductImages } from '@/lib/s3/fetchProductImages'
import Image from 'next/image'


export default function ProductCarousel({product_id} : {product_id: string}) {
  const [images, setImages] = useState([])

  useEffect(() =>  {
    getProductImages({id: product_id}).then((images) => {
      setImages(images)
    })
  }, [])
  
  return (
    <div>
      <Carousel >
        {
          images.map((image: any, index: any) => {
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
