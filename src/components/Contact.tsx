import React from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 text-lg">
              Connect with us to explore partnership opportunities
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_0_50px_0_rgba(0,0,0,0.1)]">
            <form className="space-y-8">
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-12 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-colors bg-gray-50/50"
                    placeholder="Your name"
                  />
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-12 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-colors bg-gray-50/50"
                    placeholder="your@email.com"
                  />
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:ring-0 transition-colors bg-gray-50/50 resize-none"
                    placeholder="Your message"
                  ></textarea>
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-6" />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}