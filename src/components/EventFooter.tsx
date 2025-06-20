
import React from 'react';
import { Calendar, MapPin, Mail, Phone } from 'lucide-react';

const EventFooter = () => {
  return (
    <footer className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thank You for Being Part of History
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-4">
            TechFest 2024 was more than an event—it was a catalyst for innovation, 
            collaboration, and the future of technology.
          </p>
          <div className="text-lg text-purple-200">
            <p>Organized by <span className="font-semibold">CSTC Tech Club</span></p>
            <p>South Asian University, New Delhi</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Event Date</h3>
            <p className="text-white/70">March 15-17, 2024</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-white/70">South Asian University<br />New Delhi, India</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-white/70">cstc@techfest2024.com</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Contact</h3>
            <p className="text-white/70">+91 (11) 123-4567</p>
          </div>
        </div>

        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-white/50">
            © 2024 CSTC Tech Club, South Asian University. All rights reserved. | Designed with innovation in mind.
          </p>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default EventFooter;
