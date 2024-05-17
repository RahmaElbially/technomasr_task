import React from 'react';
import Navbar from './Shared/Navbar';
import { BrowserRouter} from 'react-router-dom';
import MainRouter from './Components/Router/MainRouter';
import Footer from './Shared/Footer';
import IconRouter from './Components/Router/IconRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <MainRouter />
          <IconRouter />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
