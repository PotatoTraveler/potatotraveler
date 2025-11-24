"use client";
import PhotographyPricing from '@/components/PhotographyPricing';
// pages/contact.tsx
// import { useState, FormEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

const Contact = () => {
  //   const [formData, setFormData] = useState<FormData>({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  //   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  //   const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  //   };

  //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     // Simulate API call - in a real app, replace with actual API call
  //     try {
  //       // await fetch('/api/contact', {
  //       //   method: 'POST',
  //       //   headers: { 'Content-Type': 'application/json' },
  //       //   body: JSON.stringify(formData),
  //       // });

  //       // Simulate delay
  //       await new Promise(resolve => setTimeout(resolve, 1000));

  //       setSubmitSuccess(true);
  //       setFormData({ name: '', email: '', message: '' });
  //     } catch (error) {
  //       setSubmitSuccess(false);
  //       console.error('Error submitting form:', error);
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };

  return (
    <main title="Contact | Potato Traveler">
      <Head>
        <meta name="description" content="Get in touch with Potato Traveler" />
      </Head>

      {/* Hero Header */}
      <div className="relative h-96 w-full bg-gray-100">
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-gray-900 mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl">
            I&apos;d love to hear from you! Whether you have a question about my travels,
            want to collaborate, or just want to say hello, I&apos;m here to chat.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Enhanced Support Section */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900">Support My Adventures</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm">
              Love following my potato&apos;s journey around the world? Your support helps fuel more adventures and keeps the content coming!
            </p>
            <div className="flex space-x-4">
              <a href="https://ko-fi.com/potatotraveler" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-200 shadow-sm">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Buy me a coffee ☕
              </a>
            </div>
          </div>
          

          {/* <div className="flex flex-col md:flex-row md:space-x-10">
            <PhotographyPricing />
          </div> */}
          <div className="flex flex-col md:flex-row md:space-x-10">

            {/* Left Column - Location Info */}
            <div className="md:w-1/2 mb-10 md:mb-0">

              <div className="space-y-8 mt-12">
                {/* Enhanced Location Section */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Where to Find Me</h3>
                  
                  {/* Current Location */}
                  <div className="flex items-center mb-6 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Currently based in</p>
                      <p className="text-blue-600 font-medium">St. Louis, Missouri</p>
                    </div>
                  </div>

                  {/* Origin Location */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Originally from</p>
                      <p className="text-green-600 font-medium">San Juan, Puerto Rico 🇵🇷</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Column - Contact Info */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="space-y-8 mt-12">
                {/* Enhanced Contact & Social Section */}
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Get in Touch & Connect</h3>
                  
                  {/* Email Section */}
                  <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Email me directly</p>
                      <a href="mailto:potatotraveler@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors font-medium">
                        potatotraveler@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:from-pink-100 hover:to-purple-100 transition-colors">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Follow my adventures</p>
                      <a href="https://instagram.com/potato.traveler" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors font-medium">
                        @potato.traveler
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Contact Form
            <div className="md:w-1/2">
              <form className="bg-white shadow-sm p-8 rounded-md" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`w-full py-3 px-6 bg-gray-900 text-white rounded-md transition-colors ${
                    isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'hover:bg-gray-700'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitSuccess === true && (
                  <p className="mt-4 text-green-600">
                    Thank you! Your message has been sent. I&apos;ll get back to you soon.
                  </p>
                )}
                
                {submitSuccess === false && (
                  <p className="mt-4 text-red-600">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}
              </form> 
            </div>*/}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;