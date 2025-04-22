import React, { useState } from 'react';
import Head from 'next/head';

type Session = {
  title: string;
  price: string;
  features: string[];
  description: string;
};

type AddOn = {
  title: string;
  price: string;
};

const PhotographyPricing: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<string | null>(null);

  const sessions: Session[] = [
    {
      title: "Mini Session",
      price: "$100",
      features: [
        "Up to 1 hour shoot",
        "10–12 edited high-res images",
        "Online gallery delivery",
      ],
      description: "Ideal for headshots, quick portraits, small events"
    },
    {
      title: "Standard Session",
      price: "$250",
      features: [
        "Up to 3 hours of shooting",
        "30–40 edited high-res images",
        "Light retouching",
        "Online gallery delivery",
      ],
      description: "Great for couples, family, or creative shoots"
    },
    {
      title: "Half-Day Event",
      price: "$450",
      features: [
        "Up to 4 hours of coverage",
        "50–75 edited images",
        "Candid and posed shots",
        "7–10 day turnaround",
      ],
      description: ""
    },
    {
      title: "Full-Day Event",
      price: "$800",
      features: [
        "Up to 8 hours of coverage",
        "100+ edited high-res images",
        "Includes pre-event planning call",
      ],
      description: "Ideal for conferences, parties, or content capture"
    },
  ];

  const addOns: AddOn[] = [
    { title: "Extra Editing / Retouching", price: "$40/hr" },
    // { title: "Rush Delivery (3 days)", price: "+$100" },
    // { title: "Travel Fee", price: "$0.60 per mile beyond 25 miles" },
    // { title: "Raw Files", price: "Starting at $75 (on request)" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Photography Sessions & Pricing</title>
        <meta name="description" content="Professional photography services and pricing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Photography Session Options</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our range of professional photography sessions tailored to your needs.
          </p>
        </div>

        {/* Photography Sessions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sessions.map((session, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                selectedSession === session.title ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedSession(session.title)}
            >
              <div className="bg-gray-800 text-white py-4 px-6 text-center">
                <h2 className="text-xl font-bold">{session.title}</h2>
                <p className="text-3xl font-bold mt-2">{session.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-4">
                  {session.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {session.description && (
                  <p className="text-gray-600 mt-4 italic text-sm">{session.description}</p>
                )}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md mt-6 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add-Ons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-800">{addon.title}</h3>
                <p className="text-blue-600 font-bold mt-2">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Info
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Booking Information</h2>
          <p className="text-gray-200">
            A 25% deposit is required to secure your date. Final payment due upon delivery of final images.
          </p>
          <div className="mt-8">
            <button className="bg-white text-gray-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-md transition-colors duration-300">
              Contact Us to Book
            </button>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default PhotographyPricing;