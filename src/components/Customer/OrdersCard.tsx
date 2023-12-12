'use client'
import { useEffect, useState } from "react"

export default function OrdersCard({getCustomerOrder}: {getCustomerOrder: () => any}) {
  const [order, setOrder] = useState<any>({})
  useEffect(() => {
    const loadOrder = async () => {
      const order = await getCustomerOrder()
      console.log('order')
      setOrder(order)
    }
    loadOrder()
  },[])
  return (
    <div>
    </div>
  )
}
