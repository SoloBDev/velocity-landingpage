"use client";

import { Instagram } from "lucide-react";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className='max-w-6xl mx-auto'
    >
      <div className='relative -top-4 lg:top-8 '>
        <h1 className='text-base sm:text-xl md:text-2xl lg:text-3xl not-[]:font-semibold font-poppins text-gray-900'>
          Contact Us
        </h1>
        <p className='text-gray-600 font-poppins text-sm sm:text-base lg:text-lg'>Reach out.</p>
      </div>
      <div className='grid grid-cols-2 gap-8 sm:gap-20 items-start bg-[#FCFAFA] rounded-xl shadow-sm pl-6 pr-12 sm:px-8 md:px-12 py-5 sm:py-6 relative z-10 sm:!ml-10 md:!ml-20 lg:!ml-60 !w-auto md:!w-2xl'>
        {/* Left side - Form */}
        <div>
          <form onSubmit={handleSubmit} className='space-y-12'>
            {["fullName", "email", "message"].map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    placeholder={
                      field === "fullName"
                        ? "Full Name"
                        : field === "email"
                        ? "E-mail"
                        : ""
                    }
                    value={formData[field as keyof ContactFormData]}
                    onChange={handleInputChange}
                    className='w-full px-0 pb-6 text-[#101100] placeholder-gray-400 border-0 border-b-2 border-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-0 bg-transparent'
                    required
                  />
                ) : (
                  <textarea
                    name='message'
                    placeholder='Message'
                    rows={2}
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-0 pb-2 text-gray-900 placeholder-gray-400 border-0 border-b-2 border-gray-500 focus:border-yellow-500 focus:outline-none focus:ring-0 bg-transparent resize-none'
                    required
                  />
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className='pt-1'
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#FCD34D",
                  color: "#111827",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type='submit'
                className='bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full border-2 border-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
              >
                <p className="!text-[10px] sm:!text-base font-poppins font-normal w-auto text-nowrap">Contact Us</p>
              </motion.button>
            </motion.div>
          </form>
        </div>

        {/* Right side - Contact Info and Image */}
        <div className='flex flex-col items-start space-y-6 gap-28'>
          <div className='flex flex-col space-y-6 gap-8'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "backOut" }}
            >
              <h2 className='!text-lg !font-semibold !text-gray-900 !font-poppins'>
                Contact
              </h2>
              <p className='font-light'>velocity@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "backOut" }}
            >
              <h2 className='!text-lg !font-semibold !text-gray-900 !font-poppins'>
                Based in
              </h2>
              <p className='font-light'>Addis Ababa, Ethiopia</p>
            </motion.div>
          </div>

          <div className='flex items-center space-x-8 mt-0 sm:mt-4'>
            <motion.a
              href='https://www.facebook.com/velocity'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='text-gray-600 hover:text-gray-800 transition-colors duration-200'
            >
              <FaFacebook size={32} />
            </motion.a>
            <motion.a
              href='https://www.instagram.com/velocity'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='text-gray-600 hover:text-gray-800 transition-colors duration-200'
            >
              <Instagram size={32} />
            </motion.a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className='relative -top-72 -left-16'
      >
        <Image
          src='/contact_img.png'
          alt='Contact Us Image'
          width={360}
          height={600}
          className='rounded-lg'
          priority
        />
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
