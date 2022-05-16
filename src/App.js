import logo from './logo.svg';
import './css/App.css';
import Navigation from './components/Navigation';
import { Container, Stack } from 'react-bootstrap';
import Headline from './components/Headline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App fw-lighter">
      <header className="App-header">
        <Navigation />
      </header>
      <main className='text-light bg-dark' style={{ paddingTop: '100px' }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
