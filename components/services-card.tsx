"use client"; 


import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({
  service,
}: {
  service: {
    id: number;
    title: string;
    items: Array<{ title: string; description: string }>;
  };
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(cardRef.current, {
          opacity: 0,
          y: 80, // Y
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 30%", // when the card's top hits 50% of viewport
            toggleActions: "play play none reverse",
          },
        });
      }, cardRef);

      return () => ctx.revert(); // Clean up animation
    }
  }, []);

  const itemCount = service.items.length;

  const renderContent = () => {
    if (itemCount === 1) {
      return (
        <>
          <div className='bg-slate-600 rounded-lg px-12 py-24 text-white text-center mb-4'>
            <div className='text-sm font-medium'>{service.items[0].title}</div>
            <div className='text-xs'>{service.items[0].description}</div>
          </div>
        </>
      );
    } else if (itemCount === 2 || itemCount === 3) {
      return (
        <>
          <div className='bg-slate-600 rounded-lg px-8 py-12 text-white text-center mb-4'>
            <div className='text-sm font-medium'>{service.items[0].title}</div>
            <div className='text-xs'>{service.items[0].description}</div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {service.items.slice(1).map((item, index) => (
              <div key={index} className='bg-slate-600 rounded-lg px-4 py-8 text-white text-center'>
                <div className='text-sm font-medium'>{item.title}</div>
                <div className='text-xs'>{item.description}</div>
              </div>
            ))}
          </div>
        </>
      );
    } else if (itemCount === 4) {
      return (
        <>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            {service.items.slice(0, 2).map((item, index) => (
              <div key={index} className='bg-slate-600 rounded-lg px-4 py-8 text-white text-center'>
                <div className='text-sm font-medium'>{item.title}</div>
                <div className='text-xs'>{item.description}</div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-4'>
            {service.items.slice(2).map((item, index) => (
              <div key={index} className='bg-slate-600 rounded-lg px-4 py-8 text-white text-center'>
                <div className='text-sm font-medium'>{item.title}</div>
                <div className='text-xs'>{item.description}</div>
              </div>
            ))}
          </div>
        </>
      );
    } else if (itemCount >= 5) {
      return (
        <>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            {service.items.slice(0, 2).map((item, index) => (
              <div key={index} className='bg-slate-600 rounded-lg px-4 py-7 text-white text-center'>
                <div className='text-sm font-medium'>{item.title}</div>
                <div className='text-xs'>{item.description}</div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='bg-slate-600 rounded-lg px-4 py-8 text-white text-center'>
              <div className='text-sm font-medium'>{service.items[2].title}</div>
              <div className='text-xs'>{service.items[2].description}</div>
            </div>
            <div className='space-y-2'>
              {service.items.slice(3).map((item, index) => (
                <div key={index} className='bg-slate-600 rounded-lg px-2 py-4 text-white text-center'>
                  <div className='text-xs font-medium'>{item.title}</div>
                  <div className='text-xs'>{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <Card className='!bg-transparent border-none shadow-none' ref={cardRef}>
      <CardContent
        className={`${
          service.id === 1
            ? `bg_media`
            : service.id === 2
            ? `bg_edit`
            : service.id === 3
            ? `bg_graphics`
            : service.id === 4
            ? `bg_graphics`
            : service.id === 5
            ? `bg_consult`
            : service.id === 6
            ? `bg_social`
            : `bg-slay-700`
        } py-10  rounded-2xl`}
      >
        {renderContent()}
        <div className='flex items-center justify-between mt-10'>
          <span className='text-sm font-medium'>{service.title}</span>
          <Link href='#' className='text-sm text-blue-900 hover:underline'>
            View All →
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
