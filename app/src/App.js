import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './views/about/about.js';
import Dashboard from '../src/views/dashboard/dashboard.js';
import Schedule from './views/schedule/schedule.js';
import Historic from './views/historic/historic.js';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/historic' element={<Historic/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
