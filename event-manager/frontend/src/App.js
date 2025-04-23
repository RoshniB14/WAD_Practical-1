import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import CreateEvent from './components/CreateEvent';
import EventDetails from './components/EventDetails';
import AboutPage from './components/AboutPage'; 
import Register from './components/Register';

function App() {
  const [events, setEvents] = useState([
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventList events={events} />} />
        <Route path="/create" element={<CreateEvent events={events} setEvents={setEvents} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events/:id" element={<EventDetails events={events} />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
