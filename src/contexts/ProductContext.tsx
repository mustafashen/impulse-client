import { fetchAllProducts } from "@/lib/api/product/product"
import { createContext, useContext, useEffect, useState } from "react"

async function getAllProducts() {
  const product = await fetchAllProducts()
  return product
}

const ProductsContext = createContext<any>([{}])

export function ProductsContextProvider({children}: {children: React.ReactElement}) {

  const [products, setProducts] = useState(ProductsContext)

  useEffect(() => {
    getAllProducts().then(products => setProducts(products))
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => useContext(ProductsContext)