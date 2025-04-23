import { useParams, useNavigate } from 'react-router-dom';
import '../styles/EventDetails.css';

export default function EventDetails({ events }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);  // Use 'id' as a string from the URL

  if (!event) return <div className="event-details-container">Event not found</div>;

  return (
    <div className="event-details-container">
      <h2 className="event-name">{event.name}</h2>
      <p className="event-info">📍 {event.location}</p>
      <p className="event-info">📅 {event.date}</p>
      <p className="event-desc">{event.description}</p>
      <button className="back-btn" onClick={() => navigate(-1)}>← Go Back</button>
    </div>
  );
}
