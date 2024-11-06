// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard/Dashboard';
import AllAttenders from './components/AllAttenders/AllAttenders';
import AllSponsors from './components/AllSponsors/AllSponsors';
import Setting from './components/Setting/Setting';
import Profile from './components/Profile/Profile';
import AddEvent from './components/Event/AddEvent';
import AllEvents from './components/Event/AllEvent';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
<>
    <Header/>
    <Home/>
    <Router>
     <Sidebar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/all-attenders" element={<AllAttenders />} />
          <Route path="/all-sponsors" element={<AllSponsors />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      
    </Router>
    </>
  );
}

export default App;

