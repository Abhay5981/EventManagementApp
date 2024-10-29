import React from 'react';

const AllAttenders = () => {
  // Mock data for demonstration; replace with actual data or fetch from API
  const attenders = [
    { id: 1, name: 'Mohan Das', email: 'mohan@gmail.com', registrationDate: '2024-10-20' },
    { id: 2, name: 'Komal', email: 'komal@gmail.com', registrationDate: '2024-10-22' },
    { id: 3, name: 'Sam', email: 'sam@gmail.com', registrationDate: '2024-10-25' },
  ];

  return (
    <div className="p-8 mt-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">All Attenders</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {attenders.map((attender) => (
              <tr key={attender.id} className="border-t border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-4">{attender.name}</td>
                <td className="py-3 px-4">{attender.email}</td>
                <td className="py-3 px-4">{attender.registrationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAttenders;

