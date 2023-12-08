import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ShoppingCart } from "react-feather"
import CartItem from "../../DesktopNavbar/CustomerMenu/Cart/CartItem"
import { useCartContext } from "@/contexts/CartContext"

export default function Cart() {
  const cart = useCartContext()

  return (
    <Dialog>
      <DialogTrigger><ShoppingCart/></DialogTrigger>
      <DialogContent className="w-full h-full space-y flex flex-col">
        <DialogHeader className='text-left'>
          <DialogTitle>Cart</DialogTitle>
        </DialogHeader>
        <div>
        {
          cart?.cartItems.map((item => {
            return (
              <CartItem item={item} key={item.id}/>
            )
          }))
        }
      </div>
      </DialogContent>
    </Dialog>
  )
}
