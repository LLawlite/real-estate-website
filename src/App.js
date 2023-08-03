import logo from './logo.svg';
import './styles/App.css';

import Header from './components/Header.js';
import Footer from './components/Footer';

import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
