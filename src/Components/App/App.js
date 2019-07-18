import React from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import OwnerPage from '../OwnerPage/OwnerPage';

function App() {
  return (
    <div className="App">
      <header className="App-header"><h1>Pet Hotel</h1></header>
      <Dashboard />
      <OwnerPage />
    </div>
  );
}

export default App;
