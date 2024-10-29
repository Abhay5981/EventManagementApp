import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-8 mt-4 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      
     
      <div className="w-32 h-32 mb-4">
        <img
          src="./profilepic.png" 
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-blue-600"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Abhay Kumar</h2>
        <p className="text-gray-600">abhayk9852@gmail.com</p>
        <p className="text-gray-500 mt-2">Frontend Developer with a passion for creating beautiful and functional web applications. Enthusiastic about learning new technologies and improving user experiences.</p>
      </div>
   
      <div className="mt-6 space-y-3">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">Edit Profile</button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition">Log Out</button>
      </div>
    </div>
  );
};

export default Profile;
