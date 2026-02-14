import Navbar from './components/Navbar';
import Hero from './components/Homepage/Hero';
import Features from './components/Homepage/Features';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
