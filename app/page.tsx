"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/services-card";
import { servicesData } from "@/components/data/services";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Create refs for GSAP animations
  const headerRef = useRef<HTMLDivElement>(null);
  const logoLineRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLImageElement>(null);
  const taglineRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const exploreButtonRef = useRef<HTMLButtonElement>(null);
  const customersRef = useRef<HTMLDivElement>(null);
  const projectsHeaderRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contactRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  // Initialize animations
  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: -30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
      });
    }

    // Logo line animation
    gsap.from(logoLineRef.current, {
      width: 0,
      duration: 1.2,
      delay: 0.4,
      ease: "expo.out",
    });

    // Hero text animation
    gsap.from(heroTextRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      delay: 0.6,
      ease: "back.out(1.7)",
    });

    // Tagline animation
    gsap.from(taglineRefs.current, {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      delay: 1,
      ease: "power3.out",
    });

    // Description + button animation
    if (descriptionRef.current) {
      gsap.from(descriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        delay: 1.2, // Adjust as needed
        ease: "power3.out",
      });
    }

    // Animate the Explore button
    if (exploreButtonRef.current) {
      gsap.from(exploreButtonRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        delay: 1.2, // Slightly later than description
        ease: "power3.out",
      });
    }

    // Customers animation
    if (customersRef.current) {
      gsap.from(customersRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        delay: 1.8,
        ease: "power3.out",
      });
    }

    // Horizontal line animation
    gsap.to(".horizontal-line", {
      width: "100%",
      duration: 1.5,
      delay: 2,
      ease: "expo.out",
    });

    // Projects header animation
    if (projectsHeaderRef.current) {
      gsap.from(projectsHeaderRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: projectsHeaderRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }

    // Filter animation
    if (filterRef.current) {
      gsap.from(filterRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.7,
        scrollTrigger: {
          trigger: filterRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Service cards animation
    serviceCardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    // Contact animation
    gsap.from(contactRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Footer animation
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.7,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 55%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <div className='min-h-screen bg-white'>
        <header
          ref={headerRef}
          className='flex items-center justify-between px-6 py-4'
        >
          <nav className='flex items-center space-x-3 sm:space-x-6 lg:space-x-8'>
            <Link href='#' className='!text-[#1A2C42] hover:text-gray-600 text-sm sm:text-base'>
              Work
            </Link>
            <Link href='#' className='!text-[#1A2C42] hover:text-gray-600 text-sm sm:text-base'>
              About
            </Link>
          </nav>

          <div className='absolute left-1/2 transform -translate-x-1/2 flex justify-center flex-col lg:top-6 items-center'>
            <h1 className='sm:text-lg md:text-xl !text-[#1A2C42] !font-montserrat'>
              Velocity
            </h1>
            <div
              ref={logoLineRef}
              className='!w-40  sm:!w-80 md:!w-96 bg-foreground !h-[.5px] sm:!h-[1px] mx-auto mt-2'
            ></div>
          </div>

          <button className='border-1 sm:border-2 border-gray-400 rounded-full px-4 sm:px-6 py-.5 sm:py-1.5 hover:bg-gray-100'>
            Contact
          </button>
        </header>

        <section className='py-20 px-6 text-center'>
          <div className='max-w-5xl mx-auto'>
            <div className='my-8 flex justify-center'>
              <Image
                ref={heroTextRef}
                src='/hero-text.svg'
                alt='hero text velocity'
                //make the width reponsive
                className='!w-[300px] sm:!w-[800px] h-auto !-mt-16 sm:!mt-0'
                width={800}
                height={120}
                priority
              />
            </div>

            <div
              className='absolute left-0 w-full mx-auto -mt-14 sm:-mt-20 p-8 
                  bg-gradient-to-b from-[#e5e5e5]/1 to-transparent bg-opacity-30 
                  backdrop-blur-sm transition-all duration-500'
            >
              <div className='mb-4'>
                <p
                  ref={(el) => {
                    taglineRefs.current[0] = el;
                  }}
                  className='text-lg sm:text-[22px] text-gray-700 mb-2 font-poppins text-center tracking-wider'
                >
                  With Innovative{" "}
                  <span className='font-semibold font-oleo '>
                    Digital Solutions
                  </span>
                  , We Forge
                </p>
                <p
                  ref={(el) => {
                    taglineRefs.current[1] = el;
                  }}
                  className='sm:text-[22px] text-gray-700 mb-4 font-poppins tracking-wider text-lg'
                >
                  Success At <span className='font-semibold'>The Speed</span> Of
                  Progress.
                </p>
              </div>
              <p
                ref={descriptionRef}
                className='text-gray-600 mb-8 max-w-[260px] sm:max-w-[420px] mx-auto font-montserrat text-justify text-[11px] sm:text-sm'
              >
                We Forge Digital Success For Local Businesses In Addis Ababa,
                Empowering Growth At The Speed Of Progress.
              </p>

              <button
                ref={exploreButtonRef}
                className='bg-[#1A2C42] hover:bg-[#1f354f] !text-white px-10 sm:px-12 py-2 sm:!py-2.5 rounded-full mb-8 border-3 !border-[#FAD355] font-poppins text-sm sm:text-base'
              >
                Explore
              </button>

              <div ref={customersRef} className='flex flex-col items-center'>
                <div className='flex items-center justify-center space-x-2 mb-4'>
                  <span className='text-sm text-gray-600 font-poppins'>
                    100+ Customers{" "}
                    <span className='font-montserrat font-bold'>Satisfied</span>
                  </span>
                </div>

                <div className='flex justify-center space-x-2'>
                  <Image
                    src='/cusomers.svg'
                    alt='Customer Avatars'
                    width={132}
                    height={50}
                  />
                </div>
              </div>
              <div className='horizontal-line sm:w-[450px] md:w-[600px] lg:w-[800px] bg-foreground !h-[.5px] mx-auto mt-10 sm:mt-16'></div>
            </div>

            <div className='absolute !mt-[28rem] sm:!mt-96 flex flex-col justify-between items-center left-0 w-full px-2 sm:px-8'>
              <div
                ref={projectsHeaderRef}
                className='absolute left-0 flex flex-col sm:flex-row justify-between w-full items-center px-3 sm:px-10 gap-4'
              >
                <p className='font-montserrat font-semibold text-xl text-[#1A2C42]'>
                  Recent Projects
                </p>
                {/* input field(select option) */}
                <div
                  ref={filterRef}
                  className='flex items-center justify-center gap-5 sm:gap-8'
                >
                  <div className='flex items-center justify-center'>
                    <Image
                      src={"/check.svg"}
                      alt='check box'
                      width={24}
                      height={24}
                      className='inline-block mr-1 sm:mr-2'
                    />
                    <p className="text-sm sm:text-base">Categorized</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <label
                      htmlFor='category'
                      className='py-1 sm:py-[6px] px-3 sm:px-5 bg-[#1A2C42] text-white font-montserrat border-1 sm:border-2
                      text-sm sm:text-base border-[#FAD355] rounded-bl-sm rounded-tl-sm cursor-pointer hover:bg-[#1f354f] relative z-1'
                    >
                      Filter
                    </label>
                    <select
                      name='category'
                      id='category'
                      className='py-[3px] sm:py-[7px] px-1 sm:px-5 bg-[#d5d5d5] text-[#1A2C42] font-montserrat border-2 border-[#d8d8d8] cursor-pointer hover:bg-[#d1d1d1] -ml-1 text-sm sm:text-base rounded-br-sm rounded-tr-sm'
                    >
                      <option value='Social Media'>Social Media</option>
                      <option value='Web Development'>Web Development</option>
                      <option value='Mobile App'>Mobile App</option>
                      <option value='Branding'>Branding</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 mb-5 w-full px-2'>
                {servicesData.services.map((service, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      serviceCardsRef.current[index] = el;
                    }}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          className='relative max-w-5xl mx-auto px-6 py-2 top-[144rem] sm:top-[168rem] md:top-[106rem] lg:top-[80rem]'
        >
          <ContactUs />
        </section>

        <footer
          ref={footerRef}
          className='relative top-[132rem] sm:top-[152rem] md:top-[92rem] lg:top-[72rem] w-full text-green-700 py-8 px-1 sm:px-3 md:px-5 lg:px-10 text-center'
        >
          <Footer />
        </footer>
      </div>
    </>
  );
}
