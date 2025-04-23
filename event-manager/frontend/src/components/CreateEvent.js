

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateEvent.css';

export default function CreateEvent({ events, setEvents }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newEvent = {
      name,
      date,
      location,
      description
    };

    try {
      const response = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
      });

      const savedEvent = await response.json();
      setEvents([...events, savedEvent.event]);  
      navigate('/events');  
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to create event. Try again!');
    }
  };

  return (
    <div className="create-event-container">
      <form onSubmit={handleSubmit} className="event-form">
        <h2>Create New Event</h2>

        <input placeholder="Event Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

        <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
        <textarea placeholder="Description" rows="4" value={description} onChange={e => setDescription(e.target.value)} required />
          
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
