
import React, { useEffect, useState } from 'react';
import { Clock, Mic, Coffee, Award } from 'lucide-react';

const EventTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      time: "9:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and keynote by tech industry leaders",
      icon: Mic,
      color: "bg-purple-500"
    },
    {
      time: "11:00 AM",
      title: "Innovation Showcase",
      description: "Live demonstrations of breakthrough technologies",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      time: "2:00 PM",
      title: "Networking Lunch",
      description: "Interactive sessions with industry experts",
      icon: Coffee,
      color: "bg-green-500"
    },
    {
      time: "4:00 PM",
      title: "Startup Pitches",
      description: "Emerging startups present their innovative solutions",
      icon: Clock,
      color: "bg-pink-500"
    },
    {
      time: "7:00 PM",
      title: "Awards & Closing",
      description: "Recognition ceremony and closing remarks",
      icon: Award,
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event Timeline
          </h2>
          <p className="text-xl text-white/70">
            A journey through the day's most memorable moments
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              id={`timeline-${index}`}
              className={`timeline-item relative flex items-center mb-12 ${
                visibleItems.has(`timeline-${index}`) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className={`relative z-10 w-16 h-16 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
              </div>

              {/* Content */}
              <div className="ml-8 flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <span className="text-sm text-white/70 bg-white/10 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;
