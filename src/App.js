import './App.css';
import useScrollDetect from './hooks/useScrollDetect';
import HomePage from './pages/homepage';
import MenyPage from './pages/meny';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const hasScrolled = useScrollDetect();

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meny" element={<MenyPage />} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
