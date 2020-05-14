import React from 'react';
import Header from './components/Header';
import './App.css';
import InstaCard from './components/InstaCard';
import Video from './components/Video';
import Services from './components/Services';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Video /> */}
      <InstaCard />
      <Services />
    </div>
  );
}

export default App;
