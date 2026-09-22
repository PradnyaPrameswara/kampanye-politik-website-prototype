import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <Accordion.Item 
          key={index} 
          value={`item-${index}`}
          className="border-b border-neutral-white-300 py-4 last:border-b-0"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger className="flex flex-1 items-center justify-between py-2 text-left text-lg font-bold font-lora text-neutral-black-900 hover:text-brand-blue transition-colors group">
              <h6>{item.question}</h6>
              <ChevronDownIcon 
                className="w-5 h-5 text-neutral-black-500 transition-transform duration-300 group-data-[state=open]:rotate-180" 
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden text-neutral-black-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="py-2 pt-0">
              {item.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export default FaqAccordion;
