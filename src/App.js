import './App.css';
import Nav from './components/Nav';
import Features from './components/Features';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Features />
      <Certifications/>
      <Projects />
      <Resume/>
      <Footer/> 
    </div>
  );
}

export default App;
