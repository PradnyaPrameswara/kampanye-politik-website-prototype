import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items?: FaqItem[];
  title?: string;
  subtitle?: string;
}

const defaultItems: FaqItem[] = [
  {
    question: "What is the core vision of Asta Cita?",
    answer: "Asta Cita sets eight strategic missions to safeguard national sovereignty, guarantee food self-sufficiency, and achieve Indonesia Emas 2045.",
  },
  {
    question: "How does Makan Bergizi Gratis work?",
    answer: "The program provides daily nutritious meals to schoolchildren and mothers to end stunting and support local agricultural supply chains.",
  },
  {
    question: "How is food self-reliance achieved?",
    answer: "Indonesia modernizes agricultural infrastructure, expands farmland, and supports local farmers to eliminate reliance on basic food imports.",
  },
  {
    question: "How are strategic resources managed?",
    answer: "Domestic processing of minerals, agriculture, and maritime commodities adds local economic value and accelerates industrial growth.",
  },
  {
    question: "How can citizens follow progress?",
    answer: "Citizens can track implementation updates through unified digital governance portals and regional public communication centers.",
  },
];

export function FaqAccordion({ 
  items = defaultItems, 
  title = "Frequently asked question",
  subtitle = "Key insights on national priorities and strategic implementation."
}: FaqAccordionProps) {
  const faqList = items && items.length > 0 ? items : defaultItems;

  return (
    <div className="section-faq">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium padding-bottom-large">
            <div className="faq-component">
              <div className="faq-top-content-wrapper reveal-down">
                <div className="headline">
                  <div className="dot"></div>
                  <div>Faq</div>
                </div>
                <div className="faq-top-content">
                  <h2 className="heading-style-h2">{title}</h2>
                  <div className="text-size-regular">{subtitle}</div>
                </div>
              </div>

              <div className="padding-bottom padding-large"></div>

              <Accordion.Root type="single" collapsible className="faq-list">
                {faqList.map((item, index) => (
                  <Accordion.Item 
                    key={index} 
                    value={`item-${index}`}
                    className="faq-accordion reveal-up"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="faq-question-wrapper w-full text-left bg-transparent border-none p-0 cursor-pointer group">
                        <h6 className="heading-style-h6">{item.question}</h6>
                        <div className="faq-icon-wrapper">
                          <div className="faq-icon _1st"></div>
                          <div className="faq-icon _2nd"></div>
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="faq-answer-wrapper overflow-hidden">
                      <div className="margin-top">
                        <p className="text-size-regular">{item.answer}</p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;
