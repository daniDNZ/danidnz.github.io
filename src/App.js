import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import { IconContext } from 'react-icons';

function App() {
  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Header />
          <Main />
        <Footer />
      </IconContext.Provider>
    </>
  );
}

export default App;
