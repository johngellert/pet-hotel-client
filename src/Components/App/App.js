import React, { useState } from 'react';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import OwnerPage from '../OwnerPage/OwnerPage';
import Button from '@material-ui/core/Button';

function App() {

  const [isDashboard, setDashboard] = useState(true);

  return (
    <div className="App">
      <header className="App-header"><h1>Pet Hotel</h1></header>
      <Button
        variant={isDashboard && "contained"}
        onClick={isDashboard === false && (() => { setDashboard(!isDashboard) })}
      >
        Dashboard
      </Button>
      <Button
        variant={isDashboard === false && "contained"}
        onClick={isDashboard === true && (() => { setDashboard(!isDashboard) })}
      >
        Manage Owner
      </Button>
      {isDashboard && <Dashboard /> || <OwnerPage />}

    </div>
  );
}

export default App;
