import React, { useState } from 'react';
import { MdDashboard, MdEvent, MdPeople, MdOutlineEventNote, MdSettings, MdPerson } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sidebar() {

    const [showEventsDropdown, setShowEventsDropDown] = useState("flas")

    const toggleEventsDropdown = () =>{
      setShowEventsDropDown((prev) => !prev)
    }


  return (
    <div className="sidebar fixed left-0 top-0 h-full w-64 bg-green-800 text-white shadow-md z-10">
      <div className="sidebarWrapper flex flex-col items-start p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-6">Navigation</h3>
        <ul className="sidebarList w-full">
          <Link to="/" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <li className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer" onClick={toggleEventsDropdown}>
            <MdEvent size={20} />
            <span>Events</span>
          </li>
          {showEventsDropdown && ( 
            <ul className="ml-4 mt-2">
              <Link to="/add-event" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
                <span>Add Event</span>
              </Link>
              <Link to="/all-events" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
                <span>All Events</span>
              </Link>
            </ul>
          )}
          <Link to="/all-attenders" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
            <MdPeople size={20} />
            <span>All Attenders</span>
          </Link>
          <Link to="/all-sponsors" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
            <MdOutlineEventNote size={20} />
            <span>All Sponsors</span>
          </Link>
          <Link to="/settings" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
            <MdSettings size={20} />
            <span>Setting</span>
          </Link>
          <Link to="/profile" className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer">
            <MdPerson size={20} />
            <span>Profile</span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
