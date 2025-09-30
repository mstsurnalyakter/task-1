import React from 'react'
import { ArrowRight } from "lucide-react"

const ContactCTA = () => {
  return (
       <section className="max-w-[1360px] mx-auto py-16 px-4 md:py-24 lg:py-32">
      <div className="">
        <div className="relative overflow-hidden  rounded-2xl bg-[#0058FF] px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">Get In Touch</h2>
            <p className="mb-8 max-w-2xl text-base text-white/90 md:text-lg leading-relaxed">
              Contact us now to enquire our plumbing services, whether you have a commercial project that requires
              support, or a domestic plumbing task that needs the attention of a trusted professional.
            </p>
            <button className="inline-flex items-center text-nowrap gap-2 rounded-lg bg-white text-[16px] px-4 md:px-8 py-3 font-semibold text-[#0066FF] transition-colors cursor-pointer hover:bg-white/90">
              Book a Professional Plumber
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA