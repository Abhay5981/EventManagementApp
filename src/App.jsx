
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard'; 
import { useSelector } from 'react-redux'; 

function App() {
  
  const isDashboardOpen = useSelector((state) => state.view.isDashboardOpen);

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {isDashboardOpen ? <Dashboard /> : <p>Select "Dashboard" from the sidebar to open it.</p>}
        </main>
      </div>
    </>
  );
}

export default App;
