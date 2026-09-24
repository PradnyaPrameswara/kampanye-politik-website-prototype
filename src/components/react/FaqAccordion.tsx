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
    question: "What is your organization’s mission?",
    answer: "Rorem ipsum dolor sit amet consectetur. Sit est nunc proin tellus posuere egestas vitae morbi. Sed molestie nam ut at non facilisis fames nunc.",
  },
  {
    question: "How do I join your campaigns?",
    answer: "Sed molestie nam ut at non facilisis fames nunc ut. Rorem ipsum dolor sit amet consectetur. Sit est nunc proin tellus posuere egestas vitae morbi. ",
  },
  {
    question: "How do you ensure transparency?",
    answer: "Sit est nunc proin tellus posuere egestas vitae morbi. Rorem ipsum dolor sit amet consectetur. Sed molestie nam ut at non facilisis fames nunc ut.",
  },
  {
    question: "Who are your key team members?",
    answer: "Ipsum dolor sit amet consectetur. Sit est nunc proin tellus posuere hksfkf egestas vitae morbi. Sed molestie nam ut at non facilisis fames.",
  },
  {
    question: "Where can I find annual reports?",
    answer: "fames rorem ipsum dolor sit amet consectetur. Sit est nunc proin tellus posuere egestas vitae morbi. Sed molestie nam ut at non facilisis.",
  },
];

export function FaqAccordion({ 
  items = defaultItems, 
  title = "Frequently asked question",
  subtitle = "Risus vitae penatibus consequat pellentesque consequat tempor."
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
