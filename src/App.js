import logo from './logo.svg';
import './css/App.css';
import Navigation from './components/Navigation';
import { Container, Stack } from 'react-bootstrap';

function App() {
  return (
    <div className="App fw-lighter">
      <header className="App-header">
        <Navigation />
      </header>
      <main className='text-light mt-5 bg-dark'>
        <section className='vh-100'>
          <Container>
            <Stack gap={3}>
              <h1 className='display-3 text-center'>Welcome to my page</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore fuga voluptas sint similique qui architecto est? Fugit earum, velit praesentium eum cum totam neque magnam! Doloremque tenetur similique aliquid?</p>
            </Stack>
          </Container>
        </section>
        <section className='vh-100 bg-light text-dark'>
          <Container>
            <Stack gap={3}>
              <h1 className='display-3 text-center'>Welcome to my page</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore fuga voluptas sint similique qui architecto est? Fugit earum, velit praesentium eum cum totam neque magnam! Doloremque tenetur similique aliquid?</p>
            </Stack>
          </Container>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
