import React from 'react';
import Navbar from './Shared/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/Router/AppRouter';
import Footer from './Shared/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <AppRouter />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;