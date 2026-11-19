import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@ui-sdk/react/accordion';

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
    question: "Apa visi utama Asta Cita?",
    answer: "Asta Cita menetapkan delapan misi strategis untuk menjaga kedaulatan nasional, memastikan swasembada pangan, dan mewujudkan Indonesia Emas 2045.",
  },
  {
    question: "Bagaimana cara kerja Makan Bergizi Gratis?",
    answer: "Program ini menyediakan makanan bergizi harian bagi anak sekolah dan ibu untuk menuntaskan stunting serta memperkuat rantai pasok pertanian lokal.",
  },
  {
    question: "Bagaimana swasembada pangan dicapai?",
    answer: "Indonesia memodernisasi infrastruktur pertanian, memperluas lahan garapan, dan mendukung petani lokal untuk mengurangi ketergantungan pada impor pangan pokok.",
  },
  {
    question: "Bagaimana sumber daya strategis dikelola?",
    answer: "Pengolahan mineral, hasil pertanian, dan komoditas kelautan di dalam negeri meningkatkan nilai ekonomi lokal serta mempercepat pertumbuhan industri.",
  },
  {
    question: "Bagaimana masyarakat dapat memantau progres?",
    answer: "Masyarakat dapat memantau perkembangan pelaksanaan melalui portal tata kelola digital terpadu dan pusat komunikasi publik daerah.",
  },
];

export function FaqAccordion({ 
  items = defaultItems, 
  title = "Pertanyaan yang sering diajukan",
  subtitle = "Wawasan utama mengenai prioritas nasional dan pelaksanaannya."
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
                  <div>Tanya Jawab</div>
                </div>
                <div className="faq-top-content">
                  <h2 className="heading-style-h2">{title}</h2>
                  <div className="text-size-regular">{subtitle}</div>
                </div>
              </div>

              <div className="padding-bottom padding-large"></div>

              <Accordion className="faq-list">
                {faqList.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="faq-accordion reveal-up border-b-0"
                  >
                    <AccordionHeader>
                      <AccordionTrigger className="faq-question-wrapper w-full text-left text-sm bg-transparent border-none p-0 cursor-pointer">
                        <div className="heading-style-h6">{item.question}</div>
                        <div className="faq-icon-wrapper">
                          <div className="faq-icon _1st"></div>
                          <div className="faq-icon _2nd"></div>
                        </div>
                      </AccordionTrigger>
                    </AccordionHeader>
                    <AccordionPanel className="faq-answer-wrapper pb-2.5">
                      <div className="margin-top">
                        <p className="text-size-regular">{item.answer}</p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;
