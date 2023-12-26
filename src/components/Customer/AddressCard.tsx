import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import CreateAddressCard from './CreateAddressCard'
import { Accordion, AccordionContent, AccordionHeader, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import ListAddressCard from './ListAddressCard'

export default function AddressCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Your Addresses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CreateAddressCard />
        <ListAddressCard/>
      </CardContent>
    </Card>
  )
}
