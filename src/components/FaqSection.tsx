"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer:
      "We provide transparent pricing with no hidden fees. Contact us for a detailed quote based on your specific needs.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer:
      "We offer same-day service for emergency calls and can typically schedule non-urgent appointments within 24-48 hours.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "Turn off your main water supply immediately, then contact us for emergency plumbing services. We can guide you through the process.",
  },
]


const FaqSection = () => {
const [openIndex, setOpenIndex] = useState<number>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="max-w-[920px] mx-auto py-16 px-4 md:py-24 lg:py-32">
      <div >
        <h2 className="mb-12 text-center text-2xl font-bold md:text-4xl lg:text-5xl">Frequently asked questions</h2>
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#D4DBE0] px-6 py-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between text-left text-base font-semibold md:text-lg"
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#2A2F32] md:text-[18px] text-[14px] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection