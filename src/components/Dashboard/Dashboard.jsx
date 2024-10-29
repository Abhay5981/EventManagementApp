import React from "react";

const Dashboard = () => {
  
  const totalEvents = 50;
  const totalAttenders = 200;
  const totalSponsors = 15;
  const upcomingEventsCount = 5;

  const upcomingEvents = [
    { id: 1, name: "Tech Conference 2023", date: "2023-12-15" },
    { id: 2, name: "Marketing Workshop", date: "2024-01-10" },
  ];

  const pastEvents = [
    { id: 1, name: "Annual Meetup 2023", date: "2023-08-10" },
    { id: 2, name: "Design Expo", date: "2023-07-05" },
  ];

  return (
    <div className="p-8 mt-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Summary Counts */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ml-14 pl-10">
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
            <span className="bg-green-200 p-3 rounded-md">Upcoming Events</span>
          </h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            View All
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {upcomingEvents.map((event) => (
            <li
              key={event.id}
              className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-700">{event.date}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Past Events */}
      <div className="mt-10 px-24">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            <span className="bg-green-200 p-3 rounded-md">Past Events</span>
          </h2>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
            View All
          </button>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {pastEvents.map((event) => (
            <li
              key={event.id}
              className="p-6 bg-blue-100 rounded-lg shadow-md hover:bg-blue-200 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-700">{event.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
