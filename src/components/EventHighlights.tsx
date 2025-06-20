
import React from 'react';
import { Lightbulb, Rocket, Users2, Trophy } from 'lucide-react';

const EventHighlights = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Innovation Showcase",
      description: "Cutting-edge technologies and breakthrough innovations from industry leaders",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Startup Launchpad",
      description: "30 promising startups pitched their revolutionary ideas to top investors",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Users2,
      title: "Networking Hub",
      description: "Unprecedented networking opportunities with global tech community",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Trophy,
      title: "Awards Ceremony",
      description: "Recognizing outstanding achievements in technology and innovation",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event Highlights
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover the moments that made TechFest 2024 an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {highlight.description}
                </p>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
