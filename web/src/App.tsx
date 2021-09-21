import React from 'react';
import dotenv from 'dotenv';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

dotenv.config();

function App() {
  return(
    <Routes />
  )
}

export default App;
