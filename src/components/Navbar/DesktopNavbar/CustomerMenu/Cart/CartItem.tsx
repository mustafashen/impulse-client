import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Minus, Plus, ShoppingCart } from 'react-feather'
import { useCartContext } from '@/contexts/CartContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import product_placeholder from "../../../../../../public/images/product_placeholder.jpg"
import { Button } from '@/components/ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'


export default function CartItem({item}: {item: ItemType}) {

  const {dispatchCartItems}: any = useCartContext()

  function handleCartItemInc(item: ItemType) {
    dispatchCartItems({type: 'QTY_INC', cartItem: {id: item.id}})
  }

  function handleCartItemDec(item: ItemType) {
    dispatchCartItems({type: 'QTY_DEC', cartItem: {id: item.id}})
  }
  
  return (
    <Card key={item.id} className='flex flex-row flex-nowrap w-full justify-between'>
      <div className='flex-grow'>
        <CardHeader>
          <CardTitle>
            {item.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
            <div>
              <div>${item.price}</div>
              <div>
                <Button 
                  onClick={() => {handleCartItemDec(item)}} 
                  size={'icon'} 
                  variant={'outline'}><MinusIcon/></Button>
                <span>{item.quantity}</span>
                <Button 
                  onClick={() => {handleCartItemInc(item)}} 
                  size={'icon'} 
                  variant={'outline'}><PlusIcon/></Button>
              </div>
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
