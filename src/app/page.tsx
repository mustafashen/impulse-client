import ProductGrid from "@/components/Product/ProductGrid"
import ProductGridWrapper from "@/components/Product/ProductGridWrapper"
import { ProductsContextProvider } from "@/contexts/ProductContext"
import { fetchAllCategories } from "@/lib/api/navbar/category"

export default function Home() {
  return (
    <div>
      <ProductGridWrapper/>
    </div>
  )
}
