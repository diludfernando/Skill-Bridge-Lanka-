import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Homepage/Hero';
import Features from './components/Homepage/Features';
import Footer from './components/Footer';
import SkillAssessment from './components/Skill Assessment/SkillAssessment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
            </>
          } />
          <Route path="/assessment" element={<SkillAssessment />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
