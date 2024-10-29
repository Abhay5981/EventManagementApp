import React, { useState } from 'react';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Event Details:", formData);
  };

  return (
    <div className="flex justify-center items-center  mt-24">
      <div className="p-8 bg-gray-200 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Event</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Event Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Event Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Event Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
