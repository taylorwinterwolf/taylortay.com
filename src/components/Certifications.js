import logo from '../assets/reactLogo.png';
import jsCert from '../assets/javascript.png'
import basicsCert from '../assets/reactBasics.png'
import advanceCert from '../assets/advancedReact.png'

export default function Certifications() {
    return (
        <div className="certsWrapper">
            <div className="container">
                <div className='row justify-content-center'>
                    <h3 className='bold mb-4'>ADDITIONAL CERTIFICATIONS</h3>
                    <div className='col-lg-2'><img src={logo} className="App-logo img-fluid" alt="logo" /></div>
                </div>
                <div className='row justify-content-center text-left certSection'>
                    <div className='col-lg-5'>
                        <h4 className='bold mb-0'>Advanced React</h4>
                        <p className='subtext'>Issued By Meta</p>
                        <p className='subtext'>Issue Date: May 2023</p>
                        <p className='subtext'>Credential ID: 3EZYF25V6Y32</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo tellus non diam feugiat, at feugiat lacus tristique. Praesent ac volutpat magna. Morbi non neque sem. Donec ac scelerisque purus. Aliquam eget ligula eu nisi facilisis ultrices consequat sed mauris. Donec volutpat in libero et placerat. Vestibulum commodo ut arcu eget cursus.</p>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/3EZYF25V6Y32' target='_blank' rel="noreferrer" className='certDownloadBtn'><button type="button" className="btn btn-primary certDownloadBtn">View Certificate</button></a>
                    </div>
                    <div className='col-lg-3'><img src={advanceCert} className='img-fluid' alt='Meta Javascript Certification' /></div>
                </div>
                <div className='row justify-content-center certSection'>
                    <div className='col-lg-3'><img src={basicsCert} className='img-fluid' alt='Meta Javascript Certification' /></div>
                    <div className='col-lg-6'>
                        <h4 className='bold mb-0'>React Basics</h4>
                        <p className='subtext'>Issued By Meta</p>
                        <p className='subtext'>Issue Date: April 2023</p>
                        <p className='subtext'>Credential ID: M2AGXRHDAH9P</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo tellus non diam feugiat, at feugiat lacus tristique. Praesent ac volutpat magna. Morbi non neque sem. Donec ac scelerisque purus. Aliquam eget ligula eu nisi facilisis ultrices consequat sed mauris. Donec volutpat in libero et placerat. Vestibulum commodo ut arcu eget cursus.</p>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/M2AGXRHDAH9P' target='_blank' rel="noreferrer" className='certDownloadBtn'><button type="button" className="btn btn-primary certDownloadBtn">View Certificate</button></a>
                    </div>
                </div>
                <div className='row justify-content-center certSection'>
                    <div className='col-lg-6'>
                        <h4 className='bold mb-0'>Programming With Javascript</h4>
                        <p className='subtext'>Issued By Meta</p>
                        <p className='subtext'>Issue Date: April 2023</p>
                        <p className='subtext'>Credential ID: PXFHU76N7QK3</p>
                        <p>This was just a brushup course to stay current with the latest version of Javascript</p>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/PXFHU76N7QK3' target='_blank' rel="noreferrer" className='certDownloadBtn'><button type="button" className="btn btn-primary certDownloadBtn">View Certificate</button></a>
                    </div>
                    <div className='col-lg-3'><img src={jsCert} className='img-fluid' alt='Meta Javascript Certification' /></div>
                </div>
            </div>
        </div>
    )
}