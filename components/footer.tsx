"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Instagram } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".footer-section", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className='bg-[#1A2C42] text-white px-6 sm:px-10 lg:px-16 py-4 sm:py-10 rounded-xl sm:rounded-[2rem]'
    >
      <div className='max-w-7xl mx-auto '>
        <div className='flex justify-between flex-col-reverse sm:flex-row items-center md:gap-8'>
          {/* Left Section - Company Description */}
          <div className='flex flex-col justify-evenly h-full gap-10 sm:gap-20 md:gap-32 lg:gap-40'>
            <div className='space-y-4 footer-section '>
              <p className='text-gray-300 sm:text-left text-sm sm:text-base md:text-lg font-montserrat sm:leading-relaxed max-w-md text-justify'>
                We Forge Digital Success For Local Businesses In Addis Ababa,
                Empowering Growth At The Speed Of Progress.
              </p>

              <div className='flex items-center space-x-3'>
                <span className='text-white font-medium font-poppins text-[10px] sm:text-base'>
                  More about us
                </span>
                <div className='w-2 h-2 bg-[#FAD355] rounded-full'></div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center footer-section'>
              {/* Social Icons */}
              <div className='flex space-x-4 mb-4 lg:mb-0'>
                <a
                  href='#'
                  className='w-8 h-8 sm:w-12 sm:h-12 bg-[#FAD355] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors'
                  aria-label='Facebook'
                >
                  <FaFacebook className='text-slate-800' size={24} />
                </a>
                <a
                  href='#'
                  className='w-8 h-8 sm:w-12 sm:h-12 bg-[#FAD355] rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors'
                  aria-label='Instagram'
                >
                  <Instagram className='text-slate-800' size={24} />
                </a>
              </div>

              {/* Copyright */}
              <div className='text-gray-500 text-[10px] sm:text-sm font-montserrat'>
                © 2025 — Copyright All Rights reserved
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='flex flex-col justify-between items-center gap-6 sm:gap-20 md:gap-40 md:h-full'>
            <div className='flex flex-wrap sm:grid sm:grid-cols-2 !justify-between md:flex md:flex-wrap gap-8 sm:gap-4 sm:gap-x-8 md:gap-x-5 lg:gap-8 footer-section'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors font-montserrat text-sm sm:text-base'
              >
                About.
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors font-montserrat text-sm sm:text-base'
              >
                Testimonials.
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors font-montserrat text-sm sm:text-base'
              >
                Pricing.
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors font-montserrat text-sm sm:text-base'
              >
                Contacts.
              </a>
            </div>

            {/* Contact Us and Location, and Language */}
            <div className='flex flex-col sm:flex-row justify-between items-end gap-0 sm:gap-10 md:gap-32 lg:gap-40 mb-5 sm:mb-1'>
              <div className='mb-2 sm:mb-0 sm:space-y-3'>
                <div className='text-start space-y-1 sm:mb-4'>
                  <h3 className='text-white font-semibold text-base sm:text-lg font-montserrat'>
                    Contact Us
                  </h3>
                  <div className='space-y-1 text-start'>
                    <p className='text-gray-400 font-montserrat font-light text-sm'>
                      +251 900000000
                    </p>
                    <p className='text-gray-400 font-montserrat font-light text-sm'>
                      Velocity@mail.com
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className='text-start space-y-1'>
                  <h3 className='text-white font-semibold text-base sm:text-lg font-montserrat'>
                    Location
                  </h3>
                  <p className='text-gray-400 font-montserrat font-light text-sm leading-relaxed'>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className='text-start space-y-1 sm:space-y-4 pr-[68px] sm:pr-0 sm:!-mt-4'>
                <h3 className='text-white font-semibold text-base sm:text-lg text-start'>
                  Languages
                </h3>
                <div className='flex space-x-4'>
                  <span className='text-yellow-400 font-medium'>En</span>
                  <span className='text-gray-400'>Am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
