import './css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Navigation />
        </header>
        <main>

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
