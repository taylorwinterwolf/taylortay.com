import logo from '../assets/reactLogo.png';
import basicsCert from '../assets/reactBasics.png'
import advanceCert from '../assets/advancedReact.png'

export default function Certifications() {
    return (
        <div className="certsWrapper section" id='certifications'>
            <div className="container-lg">
                <div className='row justify-content-center'>
                    <h3 className='bold mb-4'>ADDITIONAL CERTIFICATIONS</h3>
                    <div className='col-3 col-sm-3 col-md-2 col-lg-2 col-xl-1'><img src={logo} className="App-logo img-fluid" alt="logo" loading="lazy"/></div>
                </div>
                <div className='row justify-content-center text-left certSection'>
                    <div className='col-12 col-md-8 col-lg-9'>
                        <h4 className='bold mb-0'>Advanced React</h4>
                        <p className='subtext'>Issued By Meta</p>
                        <p className='subtext'>Credential ID: 3EZYF25V6Y32</p>
                        <p>In this course, I examined different types of React components and learned various characteristics and when to use them. I dug into more advanced hooks and create some of my own. I looked into building forms with React. I explored component composition and new patterns, such as Higher Order Components and Render Props. I created a web application that consumes API data and got familiar with the most commonly used React framework integrations, tools, and testing techniques.</p>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/3EZYF25V6Y32' target='_blank' rel="noreferrer" className='certDownloadBtn'><button type="button" className="btn btn-primary certDownloadBtn">View Certificate</button></a>
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img src={advanceCert} className='img-fluid' alt='Meta Javascript Certification' loading="lazy"/></div>
                </div>
                <div className='row justify-content-center certSection'>
                    <div className='col-12 col-md-8 col-lg-9'>
                        <h4 className='bold mb-0'>React Basics</h4>
                        <p className='subtext'>Issued By Meta</p>
                        <p className='subtext'>Credential ID: M2AGXRHDAH9P</p>
                        <p>In this course, I was introduced to the powerful JavaScript library React. I used React to build user interfaces for web and mobile applications. I also explored the fundamental concepts that underpin the React library and learned the basic skills required to build a simple, fast, and scalable app.</p>
                        <a href='https://www.coursera.org/account/accomplishments/certificate/M2AGXRHDAH9P' target='_blank' rel="noreferrer" className='certDownloadBtn'><button type="button" className="btn btn-primary certDownloadBtn">View Certificate</button></a>
                    </div>
                    <div className='col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2'><img src={basicsCert} className='img-fluid' alt='Meta Javascript Certification' loading="lazy"/></div>
                </div>
            </div>
        </div>
    )
}