
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Users, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventHero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-orange-900/20 to-slate-900/20">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80')] bg-cover bg-center opacity-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation Link */}
      <Link 
        to="/upcoming-events"
        className="absolute top-8 right-8 z-20 flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <span className="mr-2">Upcoming Events</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <Trophy className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm text-white/90">Event Completed Successfully</span>
          </div>
          
          {/* College and Club Info */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-teal-200 mb-2">South Asian University</p>
            <p className="text-md md:text-lg text-orange-200">CSTC Tech Club Presents</p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-teal-200 to-orange-200 bg-clip-text text-transparent">
            TechFest 2024
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            A revolutionary gathering of tech innovators, creative minds, and industry leaders that redefined the future of technology
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Calendar className="w-5 h-5 text-teal-300 mr-3" />
              <span className="text-white">March 15-17, 2024</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <MapPin className="w-5 h-5 text-orange-300 mr-3" />
              <span className="text-white">New Delhi, India</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-cyan-300 mr-3" />
              <span className="text-white">5,000+ Attendees</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default EventHero;
