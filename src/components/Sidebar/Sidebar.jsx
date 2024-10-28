import React from 'react';
import { MdDashboard, MdEvent, MdPeople, MdOutlineEventNote, MdSettings, MdPerson } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { toggleDashboard, setActivePage } from '../../redux/viewSlice';

function Sidebar() {
  const dispatch = useDispatch();

  const handlePageClick = (page) => {
    if (page === 'Dashboard') dispatch(toggleDashboard());
    dispatch(setActivePage(page));
  };

  return (
    <div className="sidebar fixed left-0 top-0 h-full w-64 bg-green-800 text-white shadow-md z-10">
      <div className="sidebarWrapper flex flex-col items-start p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-6">Navigation</h3>
        <ul className="sidebarList w-full">
          <li
            className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer"
            onClick={() => handlePageClick('Dashboard')}
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </li>
          <li
            className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer"
            onClick={() => handlePageClick('Events')}
          >
            <MdEvent size={20} />
            <span>Events</span>
          </li>
          <li
            className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer"
            onClick={() => handlePageClick('All Attenders')}
          >
            <MdPeople size={20} />
            <span>All Attenders</span>
          </li>
          <li
            className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer"
            onClick={() => handlePageClick('All Sponsors')}
          >
            <MdOutlineEventNote size={20} />
            <span>All Sponsors</span>
          </li>
          <li
            className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer"
            onClick={() => handlePageClick('Setting')}
          >
            <MdSettings size={20} />
            <span>Setting</span>
          </li>
          <li
            className="sidebarListItem flex items-center space-x-3 p-2 hover:bg-green-700 rounded-md cursor-pointer"
            onClick={() => handlePageClick('Profile')}
          >
            <MdPerson size={20} />
            <span>Profile</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
