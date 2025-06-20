
import React, { useEffect, useState } from 'react';
import { TrendingUp, Award, Globe, Zap } from 'lucide-react';

const EventStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    attendees: 0,
    speakers: 0,
    sessions: 0,
    countries: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { attendees: 5000, speakers: 120, sessions: 85, countries: 45 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          attendees: Math.floor(targets.attendees * progress),
          speakers: Math.floor(targets.speakers * progress),
          sessions: Math.floor(targets.sessions * progress),
          countries: Math.floor(targets.countries * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(targets);
        }
      }, stepTime);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const stats = [
    { icon: TrendingUp, value: counts.attendees, label: "Attendees", color: "text-purple-400" },
    { icon: Award, value: counts.speakers, label: "Speakers", color: "text-pink-400" },
    { icon: Zap, value: counts.sessions, label: "Sessions", color: "text-blue-400" },
    { icon: Globe, value: counts.countries, label: "Countries", color: "text-green-400" }
  ];

  return (
    <section id="stats-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="relative mb-4">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-white/70 text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventStats;
