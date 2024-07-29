import { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Features from './components/Features';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { firebaseAnalytics } from './firebase';
import { logEvent } from "firebase/analytics";

function App() {
  useEffect(() => {
    if (firebaseAnalytics) {
      logEvent(firebaseAnalytics, 'page_loaded');
    } else {
      console.error('Firebase Analytics is not initialized');
    }
  }, []);
  
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
