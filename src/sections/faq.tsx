import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/data";
import { FAQProps } from "@/types/types";
import { motion } from "framer-motion";
import { ArrowRightSquare, ShieldQuestion } from "lucide-react";
import React from "react";

export default function Faq(): React.ReactNode {
  return (
    <div>
      <div className="bg-[#101010] flex flex-col items-center justify-center px-3 py-6">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-2xl md:text-4xl font-extrabold flex items-center justify-center gap-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 mb-6 leading-tight mt-5"
        >
          <ShieldQuestion size={24} className="text-white" />
          Frequently Asked Questions
          <ShieldQuestion size={24} className="text-white" />
        </motion.h1>
        <Accordion
          type="single"
          collapsible
          className="w-full px-7 py-2 barlow"
        >
          {faqs.map((faq: FAQProps, _) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="px-5 barlow py-4 w-full mt-10 rounded-xl">
          <div className="bg-white rounded-xl px-6 py-4 shadow-lg text-center">
            <h1 className="text-black text-3xl mt-2 font-bold">
              Wanna Get Started ?
            </h1>
            <p className="text-gray-700 text-md font-normal mt-4">
              Join us today and take the first step towards an amazing
              experience. Whether you're here to learn, grow, or connect, we've
              got everything you need to succeed. Sign up now and unlock
              exclusive features, personalized content, and endless
              possibilities at your fingertips!
            </p>
            <div className="w-full flex justify-center items-center mt-7">
              <Button
                variant={"default"}
                className="flex animate-bounce items-center justify-center gap-2"
              >
                Get Started
                <ArrowRightSquare />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
