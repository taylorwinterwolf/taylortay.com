import logo from '../assets/code.png'
import linkedIn from '../assets/linkedin.png'
import { useEffect, useRef } from 'react'

export default function Nav() {
    const navbarRef = useRef(null)
    const handleLinkClick = () => {
      navbarRef.current.classList.remove('show'); // Remove the 'show' class from the navbar collapse element
    }

  useEffect(() => {
      const header = document.getElementById('navbar');
      const headerHeight = header.offsetHeight;
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.style.scrollMarginTop = `${headerHeight}px`;
      });
    }, []);
    
    return (
        <nav className="navbar navbar-expand-md bg-dkpurple txt-wht sticky-top" id='navbar'>
        <div className="container navContainer">
            <a className="navbar-brand d-none d-sm-block" href="#home">
              <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
              <span className='ms-2'>Taylor Wolf &nbsp;&nbsp; Front-end Dev</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent" ref={navbarRef}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#home" onClick={handleLinkClick}>Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#features" onClick={handleLinkClick}>Features</a>
              </li>
              <li className="nav-item">
                    <a className="nav-link" href="#certifications" onClick={handleLinkClick}>Certifications</a>
                  </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects" onClick={handleLinkClick}>Projects</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#resume" onClick={handleLinkClick}>Resume</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/taylor-wolf-2534569/" target="_blank" rel="noreferrer"><img src={linkedIn} className='img-fluid' alt='LinkedIn Logo' width={30}/></a>
              </li>
              </ul>
            </div>
        </div>
      </nav>
    )
}