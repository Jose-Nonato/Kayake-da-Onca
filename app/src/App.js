import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './views/about/about.js';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
