import logo from '../assets/code.png'
import linkedIn from '../assets/linkedin.png'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <div className="footerWrapper">
            <div className="container">
                <div className='row'>
                    <div className='col bold footerTxt'><img src={logo} alt="Logo" width={30}/>&nbsp;&nbsp;Designed and Built by Taylor Wolf {year}&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/taylor-wolf-2534569/" target="_blank" rel="noreferrer"><img src={linkedIn} className='img-fluid' alt='LinkedIn Logo' width={26}/></a></div>
                </div>
            </div>
        </div>
    )
}