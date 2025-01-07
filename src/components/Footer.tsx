import React from 'react';
import { Globe2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="text-center lg:text-left">
            <Globe2 className="w-12 h-12 text-blue-600 mb-4 mx-auto lg:mx-0" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">SOCO INT LLC</h3>
            <p className="text-gray-600">Innovation Across Borders</p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Contact</h3>
            <a href="mailto:info@socoint.com" className="text-blue-600 hover:text-blue-700 transition-colors">
              info@socoint.com
            </a>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Locations</h3>
            <div className="space-y-2">
              <p className="text-gray-600">United States</p>
              <p className="text-gray-600">Mexico</p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} SOCO INT LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}