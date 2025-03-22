// app/about/page.tsx
'use client';
import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Navigation';

import PhotographyExternalLinks from '@/components/PhotographyExternalLinks';

export default function About(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    console.log(scrolled);
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />


      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5">
              <div className="relative aspect-[3/4] w-full">
                <Image 
                  src="/images/photographer-portrait.jpg" 
                  alt="Portrait of the photographer"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-4xl mb-6">Hello, I&apos;m German Rivera De La Torre</h2>
              <p className="mb-4 text-lg">I&apos;m a travel photographer and storyteller with a passion for capturing diverse landscapes, cultures, and culinary experiences around the world.</p>
              <p className="mb-4">My journey began seven years ago when I packed a camera and a potato (my peculiar travel companion) and set off to explore the world. Since then, I&apos;ve visited over 40 countries, documenting breathtaking vistas and intimate cultural moments.</p>
              <p className="mb-6">What makes my work unique? I photograph my trusty potato in every location I visit, creating a whimsical visual diary that connects diverse landscapes through this humble root vegetable. It&apos;s become my signature — a reminder that beauty and wonder can be found everywhere, even in the most ordinary things.</p>
              <div className="flex gap-4">
                <a href="#my-work" className="btn">View My Work</a>
                <a href="/contact" className="btn btn-outline">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16">My Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-4 rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-3">Authentic Storytelling</h3>
              <p className="text-gray-600">I believe in capturing real moments that tell authentic stories. Every photograph has a narrative behind it that connects viewers to different cultures and experiences.</p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-4 rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-3">Playful Perspective</h3>
              <p className="text-gray-600">The potato in my photos adds a touch of whimsy and a consistent point of reference that helps viewers appreciate the scale and diversity of our world.</p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-4 rounded-full bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-3">Mindful Travel</h3>
              <p className="text-gray-600">I practice responsible tourism and approach each destination with respect for local cultures and environments, seeking to capture beauty without leaving a negative impact.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Work Section 
      <section id="my-work" className="py-20 bg-white">
        <FeatureGalleries />
      </section>*/}
      {/* Featured Work Section */}
      <section id="my-work" className="py-20 bg-white">
        <PhotographyExternalLinks />
      </section>

      {/* Testimonials Section
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-16">What People Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "National Geographic",
                quote: "A refreshingly unique perspective on travel photography that combines humor with breathtaking landscapes."
              },
              {
                name: "Travel & Leisure Magazine",
                quote: "The Potato Traveler has redefined travel photography by introducing an element of continuity and whimsy to the genre."
              },
              {
                name: "Photography Monthly",
                quote: "These images make you appreciate both the grandeur of our world and the playful creativity of a photographer unafraid to stand out."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded shadow-sm">
                <p className="mb-6 italic">{testimonial.quote}</p>
                <p className="font-medium text-sm">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Instagram Feed Section 
      <section className="py-20 bg-white">
          <InstagramFeed />
      </section>*/}

      {/* Contact CTA Section */}
      <section className="py-24 bg-white-900 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">Interested in collaborating or licensing my work? I&apos;m available for commercial projects, travel assignments, and workshops.</p>

        </div>
        <div className="container mx-auto px-4 text-center">
        <Link href="/contact" className="btn bg-gray-100 text-white hover:bg-white-200">Get In Touch</Link>
        </div>

      </section>
    </main>
  );
}