import logo from '../assets/code.png'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-dkpurple txt-wht">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
            <span className='ms-2'>Taylor Wolf &nbsp;&nbsp; Front-end Dev</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}