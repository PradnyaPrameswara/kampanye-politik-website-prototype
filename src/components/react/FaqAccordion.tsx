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
    question: "What is Makan Bergizi Gratis (MBG) and who is eligible?",
    answer: "Makan Bergizi Gratis provides wholesome daily meals to 82.9 million preschool and school-age students, pregnant women, and breastfeeding mothers to eradicate childhood stunting and boost cognitive development across Indonesia.",
  },
  {
    question: "How will Indonesia achieve 100% food and energy self-sufficiency?",
    answer: "Through modern agricultural mechanization, expanding 3 million hectares of sustainable paddy fields, upgrading irrigation networks, and accelerating biodiesel transitions up to B50 to eliminate reliance on imported fuel and staples.",
  },
  {
    question: "What are the key priorities under Asta Cita?",
    answer: "Asta Cita encompasses 8 core missions including fortifying national defense, downstream processing of 26 natural commodities, building 3 million homes annually, delivering free annual health checks, and digitizing governance to fight corruption.",
  },
  {
    question: "How is the 3 Million Homes program implemented?",
    answer: "The Ministry of Housing and Settlement coordinates the construction of 1 million urban high-rise apartments and 2 million rural/coastal houses every year, utilizing state land and subsidized financing for low-income families.",
  },
  {
    question: "How does GovTech INA Digital ensure transparency and accountability?",
    answer: "INA Digital integrates public services into a single unified portal, eliminating administrative friction and enforcing real-time budget transparency with zero tolerance for corruption across all government tiers.",
  },
];

export function FaqAccordion({ 
  items = defaultItems, 
  title = "Frequently asked questions",
  subtitle = "Clear answers on President Prabowo Subianto's national priorities, implementation milestones, and public oversight."
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
