import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Heart, ShoppingCart } from "react-feather"
import { useWishlistContext } from "@/contexts/WishlistContext"
import WishlistItem from "../../DesktopNavbar/CustomerMenu/Wishlist/WishlistItem"

export default function Wishlist() {
  const wishlist =  useWishlistContext()
  return (
    <div>
      <Dialog>
        <DialogTrigger><Heart/></DialogTrigger>
        <DialogContent className="w-full h-full space-y flex flex-col">
          <DialogHeader className='text-left'>
            <DialogTitle>Wishlist</DialogTitle>
          </DialogHeader>
          <div>
          {
            wishlist?.wishlistItems.map((item => {
              return (
                <WishlistItem item={item} key={item.id}/>
              )
            }))
          }
        </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
