import './styles.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
