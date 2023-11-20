import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function CategoryMenu() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>
          Sub item
        </AccordionContent>
        <AccordionContent>
          Sub item
        </AccordionContent>
        <AccordionContent>
          Sub item
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
