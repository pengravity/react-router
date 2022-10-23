import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Home from './components/router/Home';
import About from './components/router/About';
import Blogs from './components/router/Blogs';
import Navbar from './components/navbar/Navbar';
import NotFound from './components/router/NotFound';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/*' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />

        <Route
          path='/view'
          element={
            isLoggedIn ? <Navigate to='/blogs' /> : <h4>Please log in</h4>
          }
        />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
