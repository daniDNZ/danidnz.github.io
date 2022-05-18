// import './css/App.css';
import './styles.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <Navigation />
        </header>
        <main className="main">

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/portfolio" element={<Home />} />
          </Routes>

        </main>
        <footer className="footer">

        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
