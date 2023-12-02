import { CartContextProvider } from "@/contexts/CartContext";
import { WishlistContextProvider } from "@/contexts/WishlistContext";
import Navbar from "../Navbar/Navbar";

export default function MainContainer({children}: {children: React.ReactNode}) {
  return (
    <CartContextProvider>
    <WishlistContextProvider>
    <>
        <header>
          <Navbar/>
        </header>
        <main>
          {children}
        </main>
        <footer>
        </footer>
    </>
    </WishlistContextProvider>
    </CartContextProvider>
  )
}