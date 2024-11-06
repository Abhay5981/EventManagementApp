import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css"; // Add custom styling here

const Dashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [visibleUpcomingPosts, setVisibleUpcomingPosts] = useState(8); 
  const [visiblePastPosts, setVisiblePastPosts] = useState(8); 
  const [loading, setLoading] = useState(true);

  const totalEvents = 50;
  const totalAttenders = 200;
  const totalSponsors = 15;
  const upcomingEventsCount = 5;
  const API = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      try {
        const response = await axios.get(API);
        setUpcomingEvents(response.data);
      } catch (error) {
        console.error("Error fetching upcoming events:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchPastEvents = async () => {
      try {
        const response = await axios.get(API);
        setPastEvents(response.data);
      } catch (error) {
        console.error("Error fetching past events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingEvents();
    fetchPastEvents();
  }, []);

  // Function to load more upcoming posts
  const showMoreUpcomingPosts = () => {
    setVisibleUpcomingPosts((prev) => prev + 8);
  };

  // Function to load more past posts
  const showMorePastPosts = () => {
    setVisiblePastPosts((prev) => prev + 8);
  };

  return (
    <div className="dashboard-container flex justify-center items-center min-h-screen">
      <div className="dashboard-content p-3 mt-2 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

        {/* Summary Counts */}
        <div className="summary-grid grid grid-cols-2 gap-4 md:grid-cols-4 w-full mx-auto text-center">
          <div className="p-4 bg-green-200 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Events</h2>
            <p className="text-2xl font-bold">{totalEvents}</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Attenders</h2>
            <p className="text-2xl font-bold">{totalAttenders}</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Total Sponsors</h2>
            <p className="text-2xl font-bold">{totalSponsors}</p>
          </div>
          <div className="p-4 bg-green-200 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <p className="text-2xl font-bold">{upcomingEventsCount}</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events-section mt-10 px-10">
          <h2 className="text-2xl font-bold text-center mb-4">Upcoming Events</h2>
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <ul className="event-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {upcomingEvents.slice(0, visibleUpcomingPosts).map((event) => (
                <li key={event.id} className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition">
                  <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.body}</p>
                </li>
              ))}
            </ul>
          )}
          {visibleUpcomingPosts < upcomingEvents.length && (
            <div className="text-center mt-6">
              <button onClick={showMoreUpcomingPosts} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Show More
              </button>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div className="past-events-section mt-10 px-10">
          <h2 className="text-2xl font-bold text-center mb-4">Past Events</h2>
          <ul className="event-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {pastEvents.slice(0, visiblePastPosts).map((event) => (
              <li key={event.id} className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-700">{event.body}</p>
              </li>
            ))}
          </ul>
          {visiblePastPosts < pastEvents.length && (
            <div className="text-center mt-6">
              <button onClick={showMorePastPosts} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
