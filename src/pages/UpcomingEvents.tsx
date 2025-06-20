
import React from 'react';
import UpcomingEventsHero from '../components/UpcomingEventsHero';
import UpcomingEventsList from '../components/UpcomingEventsList';
import EventFooter from '../components/EventFooter';

const UpcomingEvents = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-orange-900">
      <UpcomingEventsHero />
      <UpcomingEventsList />
      <EventFooter />
    </div>
  );
};

export default UpcomingEvents;
