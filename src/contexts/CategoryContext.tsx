import { fetchAllCategories } from "@/lib/api/navbar/category"
import { createContext, useContext, useEffect, useState } from "react"

async function getAllCategories() {
  const categories = await fetchAllCategories()
  return categories
}

const CategoriesContext = createContext<any>([{id: '', name: '', parent_id: ''}])

export function CategoriesContextProvider({children}: {children: React.ReactElement}) {

  const [categories, setCategories] = useState(CategoriesContext)

  useEffect(() => {
    getAllCategories().then(categories => setCategories(categories))
  }, [])

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategoriesContext = () => useContext(CategoriesContext)