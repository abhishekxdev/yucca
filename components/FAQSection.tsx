'use client';

import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    id: 'faq-1',
    question: 'What types of packaging do you offer?',
    answer: 'We offer a comprehensive range of packaging solutions including food service containers, food processing materials, and agricultural packaging. Our products include cups, tubs, bowls, vacuum-sealed pouches, industrial containers, and durable packaging for produce and agricultural supplies.'
  },
  {
    id: 'faq-2',
    question: 'Do you deliver nationwide?',
    answer: 'Yes, we deliver nationwide with reliable shipping partners to ensure your packaging arrives safely and on time. We work with businesses across the country to provide consistent supply chain solutions.'
  },
  {
    id: 'faq-3',
    question: 'Do you deliver globally?',
    answer: 'Yes, we have global shipping capabilities and work with trusted partners worldwide. We can deliver to businesses across multiple continents, ensuring quality packaging reaches you wherever you operate.'
  },
  {
    id: 'faq-4',
    question: 'How do I place an order?',
    answer: 'You can place an order through our online shop, contact our sales team directly, or reach out via our contact form. For custom solutions and bulk orders, we recommend speaking with our team to discuss your specific requirements.'
  },
  {
    id: 'faq-5',
    question: 'Do you offer sustainable packaging options?',
    answer: 'Absolutely! Sustainability is at the core of what we do. We offer eco-friendly packaging options including compostable materials, FSC-certified products, and packaging that meets various environmental standards like TÜV OK Compost certification.'
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-[#F8F8F6]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Heading and Button */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-foreground">
              Frequently asked questions
            </h2>
            <Button 
              className="bg-foreground text-background hover:bg-foreground/90 px-6 py-5 rounded-lg"
            >
              View all
            </Button>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-t border-foreground/20">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-light text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
