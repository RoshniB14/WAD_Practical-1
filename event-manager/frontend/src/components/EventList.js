import '../styles/EventList.css';

export default function EventList({ events }) {
  return (
    <div className="event-list-container">
      <h2 className="event-list-title">✨ Upcoming Events ✨</h2>
      <div className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p>📍 {event.location}</p>
            <p>📅 {event.date}</p>
            <p>{event.description}</p> {/* Show event description directly */}
          </div>
        ))}
      </div>
    </div>
  );
}
