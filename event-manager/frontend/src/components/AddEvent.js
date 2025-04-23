import React, { useState } from 'react';

const AddEvent = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, date, location });
    setTitle('');
    setDate('');
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-event-form">
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEvent;
