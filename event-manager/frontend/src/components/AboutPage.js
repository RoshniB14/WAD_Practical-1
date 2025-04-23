import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Event Manager 🎪</h1>
      <p className="about-description">
        Welcome to <strong>Event Manager</strong> — your one-stop platform to discover, create, and manage amazing events! 🌟 Whether it's a college fest, workshop, seminar, or a fun hangout, we help you organize it all in a few clicks.
      </p>

      <div className="about-highlights">
        <div className="highlight-card">📅 Easy Scheduling</div>
        <div className="highlight-card">🧑‍💼 User-Friendly Dashboard</div>
        <div className="highlight-card">🚀 Real-time Updates</div>
        <div className="highlight-card">💌 Seamless Registration</div>
      </div>

      <p className="about-mission">
        Our mission is simple: Make event planning stress-free and super fun! 💡
      </p>

      <p className="about-footer">Thanks for being part of our journey! 🙌</p>
    </div>
  );
};

export default AboutPage;
