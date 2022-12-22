import Navigation from './Components/Navigation';
import Films from './Components/Films';
import Footer from './Components/Footer';
import './App.css';
import './normalize.css';
import React from 'react';

function App() {
  return (
    <div className="Navigation">
      <Navigation />
      <Films />
      <Footer />
    </div>
  );
}

export default App;


