import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./app.css";
import Home from './pages/home'; 
import Dogs from './pages/dogs.tsx';
import Cats from './pages/cats.tsx';
import Birds from './pages/birds.tsx';
import Pexpert from './pages/pexpert.tsx';
import './css/navbar.css';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/pexpert" element={<Pexpert />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

