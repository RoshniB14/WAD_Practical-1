import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventCard;
