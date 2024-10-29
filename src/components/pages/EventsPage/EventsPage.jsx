import React, { useState } from 'react';
import AllEvents from './AllEvents';
import AddEvent from './AddEvent';

const EventsPage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Tech Conference', date: '2024-11-10', location: 'Gurgaon, India' },
    { id: 2, name: 'Music Festival', date: '2024-12-15', location: 'Kolkata, India' },
    { id: 3, name: 'Art Exhibition', date: '2024-10-30', location: 'Pune, India' },
    { id: 4, name: 'Startup Pitch Day', date: '2025-01-22', location: 'Mumbai, India' },
  ]);

  const addEvent = (newEvent) => {
    const updatedEvents = [...events, { id: events.length + 1, ...newEvent }];
    setEvents(updatedEvents); 
  };

  return (
    <div>
      <AddEvent addEvent={addEvent} />
      <AllEvents events={events} />
    </div>
  );
};

export default EventsPage;
