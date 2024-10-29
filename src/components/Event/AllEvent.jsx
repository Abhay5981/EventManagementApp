import React, { useState } from 'react';

const AllEvents = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Tech Conference', date: '2024-11-10', location: 'Gurgaon, India' },
    { id: 2, name: 'Music Festival', date: '2024-12-15', location: 'Kolkata, India' },
    { id: 3, name: 'Art Exhibition', date: '2024-10-30', location: 'Pune, India' },
    { id: 4, name: 'Startup Pitch Day', date: '2025-01-22', location: 'Mumbai, India' },
  ]);

  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      const newName = prompt("Enter new event name:", eventToEdit.name);
      const newDate = prompt("Enter new event date:", eventToEdit.date);
      const newLocation = prompt("Enter new event location:", eventToEdit.location);

      setEvents(
        events.map((event) =>
          event.id === id ? { ...event, name: newName, date: newDate, location: newLocation } : event
        )
      );
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Events</h1>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-green-600 text-white ">
              <th className="py-3 px-3 text-left">Event Name</th>
              <th className="py-3 px-3 text-left">Date</th>
              <th className="py-3 px-3 text-left">Location</th>
              <th className="py-3 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{event.name}</td>
                <td className="py-3 px-4">{event.date}</td>
                <td className="py-3 px-4">{event.location}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(event.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEvents;
