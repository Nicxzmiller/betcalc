import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
// import Hero from './components/Hero';
import Container from './components/Container/Container';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Hero/> */}
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
