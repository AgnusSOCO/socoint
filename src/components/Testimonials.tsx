import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

function Testimonial({ quote, author, role, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="SOCO INT's innovative solutions transformed our business operations completely. Their team's expertise is unmatched."
            author="Sarah Johnson"
            role="CEO, TechCorp"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
          />
          <Testimonial
            quote="The level of professionalism and technical expertise provided by SOCO INT exceeded our expectations."
            author="Michael Chen"
            role="CTO, HealthTech Solutions"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
          />
          <Testimonial
            quote="Working with SOCO INT has been a game-changer for our healthcare facility. Their ventilator technology is revolutionary."
            author="Dr. Emily Rodriguez"
            role="Medical Director"
            image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
          />
        </div>
      </div>
    </section>
  );
}