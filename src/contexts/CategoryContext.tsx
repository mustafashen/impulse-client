import { fetchAllCategories } from "@/lib/api/navbar/category"
import { createContext, useContext } from "react"

async function getAllCategories() {
  const categories = await fetchAllCategories()
  console.log(categories)
  return categories
}

async function buildCategoryTree() {
  const categories = await getAllCategories()

  // find the "all" category from its name
  // create a parent object from it
  // make a depth first search
    // traverse categories that refers to all
    // for each found category find categories that refers to them
    // build the tree 

  
  const root = categories
    .find((category: any) => category.name === "all")

  
  
}

