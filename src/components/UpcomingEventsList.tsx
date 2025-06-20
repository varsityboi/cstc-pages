
import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, ExternalLink } from 'lucide-react';

const UpcomingEventsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: "AI & Machine Learning Summit 2024",
      date: "July 15-16, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "South Asian University, New Delhi",
      category: "conference",
      description: "Explore the latest advancements in AI and ML with industry experts and researchers.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4896&q=80",
      attendees: "500+",
      tags: ["AI", "Machine Learning", "Research"],
      status: "Registration Open"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      date: "August 20-22, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "CSTC Lab, SAU Campus",
      category: "workshop",
      description: "Intensive 3-day bootcamp covering modern web development technologies and best practices.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4076&q=80",
      attendees: "50",
      tags: ["Web Dev", "React", "Node.js"],
      status: "Early Bird"
    },
    {
      id: 3,
      title: "Cybersecurity Awareness Workshop",
      date: "September 10, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Main Auditorium, SAU",
      category: "seminar",
      description: "Learn about the latest cybersecurity threats and how to protect yourself and your organization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=7952&q=80",
      attendees: "200+",
      tags: ["Security", "Awareness", "Protection"],
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Blockchain & Cryptocurrency Symposium",
      date: "October 5-6, 2024",
      time: "9:30 AM - 5:30 PM",
      location: "Conference Hall, SAU",
      category: "conference",
      description: "Dive deep into blockchain technology, cryptocurrencies, and their real-world applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3543&q=80",
      attendees: "300+",
      tags: ["Blockchain", "Crypto", "Finance"],
      status: "Registration Open"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: upcomingEvents.length },
    { id: 'conference', name: 'Conferences', count: upcomingEvents.filter(e => e.category === 'conference').length },
    { id: 'workshop', name: 'Workshops', count: upcomingEvents.filter(e => e.category === 'workshop').length },
    { id: 'seminar', name: 'Seminars', count: upcomingEvents.filter(e => e.category === 'seminar').length }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Registration Open': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Early Bird': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'Coming Soon': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Exciting Events Ahead
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Don't miss out on these amazing opportunities to learn, network, and grow
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-teal-500 to-orange-500 text-white border-transparent shadow-lg shadow-teal-500/25'
                  : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getStatusColor(event.status)}`}>
                  {event.status}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-white/70 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-white/80">
                    <Calendar className="w-4 h-4 text-teal-400 mr-3" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Clock className="w-4 h-4 text-orange-400 mr-3" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <MapPin className="w-4 h-4 text-cyan-400 mr-3" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Users className="w-4 h-4 text-yellow-400 mr-3" />
                    <span className="text-sm">{event.attendees} Expected</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="flex items-center px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-teal-500 to-orange-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 group-hover:scale-105">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No events found</h3>
            <p className="text-white/70">Try selecting a different category</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingEventsList;
