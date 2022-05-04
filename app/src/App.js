import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './views/about/about.js';

import './global.css';
import Dashboard from '../src/views/dashboard/dashboard.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
