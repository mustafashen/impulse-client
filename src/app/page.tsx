import ProductGrid from "@/components/Product/ProductGrid"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Impulse'
  }
}

export default function Home() {
  return (
    <div>
      <ProductGrid category={'all'}/>
    </div>
  )
}
