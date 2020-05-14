import React from 'react';
import Header from './components/Header';
import './App.css';
import InstaCard from './components/InstaCard';
import Video from './components/Video';
import Services from './components/Services';
import Barbers from './components/Barbers';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Video /> */}
      <InstaCard />
      <Services />
      <Barbers />
    </div>
  );
}

export default App;
