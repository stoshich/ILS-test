import './App.css';
import React from 'react'
import CoordinateTable from './components/CoordinateTable';
import Map from './components/Map';

function App() {

  return (
    <div className='App'>
      <CoordinateTable />
      <Map />
    </div>
  );
}

export default App;
