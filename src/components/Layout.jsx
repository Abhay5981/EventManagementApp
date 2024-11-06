// Layout.js
import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />  
      <div className="content-container flex">
        <Sidebar /> 
        <main className="main-content flex-grow p-6">{children}</main> {/* Dynamic main content */}
      </div>
    </div>
  );
};

export default Layout;
