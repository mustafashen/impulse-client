import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import product_placeholder from "../../../../../../public/images/product_placeholder.jpg"
import { SheetFooter } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Cross1Icon, HeartIcon } from '@radix-ui/react-icons'
import { useWishlistContext } from '@/contexts/WishlistContext'

export default function WishlistItem({item}: {item: ItemType}) {
  const {dispatchWishlistItems}: any = useWishlistContext()
  function handleWishlistToggle() {
      //@ts-ignore
      dispatchWishlistItems({wishlistItem: item})
  }

  return (
    <Card key={item.id} className='relative flex flex-row flex-nowrap w-full justify-between'>
    <div className='flex-grow'>
      <CardHeader>
        <CardTitle>
          {item.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>${item.price}</p>
        </div>
        <div>
          <Button onClick={handleWishlistToggle} variant={'ghost'} size={'icon'} className='absolute top-0 right-0 rounded-full'><Cross1Icon/></Button>
        </div>
      </CardContent>
    </div>
    <div className='flex justify-center items-center pr-4'>
      <Image
        src={item.images ? item.images[0] : product_placeholder}
        alt='product_img'
        width={100}
        height={100}
      />
    </div>
  </Card>
  )
}
