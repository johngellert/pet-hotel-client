import React, { useState } from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import OwnerPage from '../OwnerPage/OwnerPage';

function App() {

  const [isDashboard, setDashboard] = useState(true);

  return (
    <div className="App">
      <header className="App-header"><h1>Pet Hotel</h1></header>
      <Button onClick={()=>{setDashboard(!isDashboard)}}>Dashboard</Button>
      <Button onClick={()=>{setDashboard(!isDashboard)}}>Manage Owner</Button>
      {isDashboard && <Dashboard /> || <OwnerPage />}
      
    </div>
  );
}

export default App;
