
import React from 'react';

const Header = () => {

  return (
    <div className='header fixed top-0 left-0 w-full bg-green-600 text-white z-20'>
      <div className="container flex items-center justify-between h-20 mx-auto px-6">
        <div className="logo">
          <h2 className="text-2xl font-bold hover:text-gray-500">Logo </h2>   
          
        </div>
        
        <div className="nav">
          <ul className="flex space-x-6">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Signin/Signup</li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Header;
