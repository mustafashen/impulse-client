'use client'
import { useEffect, useState } from "react"

export default function OrdersCard({getCustomerOrder, customer}: {getCustomerOrder: (id: string) => any, customer: Customer}) {
  const [order, setOrder] = useState<any>({})
  useEffect(() => {
    const loadOrder = async () => {
      const order = await getCustomerOrder(customer.id)
      setOrder(order)
    }
    loadOrder()
  },[])
  return (
    <div>
    </div>
  )
}
