
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard'; 
import AllAttenders from './components/AllAttenders/AllAttenders'; 
import AllSponsors from './components/AllSponsors/AllSponsors'; 
import Setting from './components/Setting/Setting'; 
import Profile from './components/Profile/Profile'; 
import AddEvent from './components/Event/AddEvent';
import AllEvents from './components/Event/AllEvent';

function App() {
  return (
    <Router>
      <Header />  
      <Sidebar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/all-events" element={<AllEvents />} /> 
        <Route path="/all-attenders" element={<AllAttenders />} />
        <Route path="/all-sponsors" element={<AllSponsors />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
