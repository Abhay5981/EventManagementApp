import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero mr-24">
        <h1>Welcome to EventMaster</h1>
        <p>Discover amazing events and enjoy an unforgettable experience.</p>
        <button className="explore-button">Explore Events</button>
      </div>

      {/* Featured Events */}
      <div className="featured-events mr-24">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          <div className="event-card">
            <img src="h1.jpg" alt="Event 1" />
            <h3>Music Festival 2024</h3>
            <p>Experience live music like never before!</p>
          </div>
          <div className="event-card">
            <img src="h2.jpg" alt="Event 2" />
            <h3>Art Expo</h3>
            <p>Immerse yourself in the world of contemporary art.</p>
          </div>
          <div className="event-card">
            <img src="h3.jpg" alt="Event 3" />
            <h3>Food Carnival</h3>
            <p>Taste exotic flavors from around the globe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


