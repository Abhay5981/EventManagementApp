import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="p-8 mt-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Counts */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4  pl-10 ml-28 w-full">
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
      <div className="mt-10 px-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            <span className="p-3 rounded-md">Upcoming Events</span>
          </h2>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {upcomingEvents.slice(0, visibleUpcomingPosts).map((event) => (
              <li
                key={event.id}
                className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition"
              >
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-700">{event.body}</p>
              </li>
            ))}
          </ul>
        )}
        {visibleUpcomingPosts < upcomingEvents.length && (
          <button
            onClick={showMoreUpcomingPosts}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Show More
          </button>
        )}
      </div>

      {/* Past Events */}
      <div className="mt-10 px-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            <span className="p-3 rounded-md">Past Events</span>
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {pastEvents.slice(0, visiblePastPosts).map((event) => (
            <li
              key={event.id}
              className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700">{event.body}</p>
            </li>
          ))}
        </ul>
        {visiblePastPosts < pastEvents.length && (
          <button
            onClick={showMorePastPosts}
            className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
