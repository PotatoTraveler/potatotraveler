"use client";
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
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 overflow">
          <Image 
            src="https://images.unsplash.com/photo-1742597548273-d913136bd5cb?q=80&w=1631&auto=format&fit=crop"
            alt="Beautiful travel landscape" 
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-light tracking-wide text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-white text-opacity-90 max-w-xl">
            Have questions about my travels or want to collaborate? I&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-10">
            
            {/* Left Column - Contact Info */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-light mb-6 text-gray-900">Let&apos;s Connect</h1>
              <p className="text-lg text-gray-600 mb-10 max-w-md">
                I&apos;d love to hear from you! Whether you have a question about my travels,
                want to collaborate, or just want to say hello, I&apos;m here to chat.
              </p>
              
              <div className="space-y-8 mt-12">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Based in</h3>
                  <p className="text-gray-600">St. Louis, Missouri</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">From</h3>
                  <p className="text-gray-600">San Jaun, Puerto Rico</p>
                </div>
              </div>
            </div>
                        {/* Left Column - Contact Info */}
                        <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-light mb-6 text-gray-900">Contact Information</h1>

              
              <div className="space-y-8 mt-12">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">potatotraveler@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Follow</h3>
                  <div className="flex space-x-4">
                    <a href="https://instagram.com/potato.traveler" target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors">
                      Instagram
                    </a>
                    {/*
                    <a href="https://twitter.com/potatotraveler" target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors">
                      Twitter
                    </a>*/}
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Donate, Tip or Buy me a Coffee</h3>
                  <div className="flex space-x-4">
                    <a href="https://ko-fi.com/potatotraveler" target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors">
                      Ko-fi
                    </a>
                    {/*
                    <a href="https://twitter.com/potatotraveler" target="_blank" rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors">
                      Twitter
                    </a>*/}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Based in</h3>
                  <p className="text-gray-600">St. Louis, Missouri</p>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">From</h3>
                  <p className="text-gray-600">San Jaun, Puerto Rico</p>
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