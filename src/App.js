import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/router/Home';
import About from './components/router/About';
import Blogs from './components/router/Blogs';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
