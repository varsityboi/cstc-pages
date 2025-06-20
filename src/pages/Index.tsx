
import React from 'react';
import EventHero from '../components/EventHero';
import EventTimeline from '../components/EventTimeline';
import EventGallery from '../components/EventGallery';
import EventStats from '../components/EventStats';
import EventHighlights from '../components/EventHighlights';
import EventFooter from '../components/EventFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-orange-900">
      <EventHero />
      <EventStats />
      <EventHighlights />
      <EventTimeline />
      <EventGallery />
      <EventFooter />
    </div>
  );
};

export default Index;
