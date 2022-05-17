import './css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App fw-lighter">
      <BrowserRouter>
        <header className="App-header">
          <Navigation />
        </header>
        <main className='text-light bg-dark' style={{ paddingTop: '100px' }}>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
          </Routes>

        </main>
        <footer>

        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
