import Modal from './Modal'
import justtodoit from '../assets/justtodoit.png'
import pigmembers from '../assets/pigmembers2.png'
import mhwylfsl from '../assets/mhwylfsl.png'
import affiliates from '../assets/affiliates.png'
import dhlyquiz from '../assets/dhlyquiz.png'
import thepigmethod from '../assets/pigvsl.png'

export default function Projects() {
    return (
        <div className="projectsWrapper" id='projects'>
            <div className="container">
                <div className='col'><h3 className='bold'>FEATURED PROJECTS</h3></div>
                <div className='row justify-content-start'>
                    <div className="col-3">
                        <div className="card">
                            <div className='cardImgWrapper'><img src={justtodoit} className="card-img-top img-fluid" alt="Just To Do It screenshot"/></div>
                            <div className="card-body">
                                <div className='cardTxtWrap'>
                                    <h5 className="card-title bold">Just To Do It</h5>
                                    <p className="card-text">Task Management Application I created to demonstrate my React JS skills to date</p>
                                    <p className="card-text"><span className='bold'>Technologies used:</span> React JS, Javascript, HTML, CSS, Bootstrap, Git, Github Pages</p>
                                </div>
                                <a href="https://taylorwinterwolf.github.io/" target="_blank" rel="noreferrer" className="btn btn-primary projectLink align-bottom">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className='cardImgWrapper'><img src={pigmembers} className="card-img-top img-fluid" alt="Just To Do It screenshot"/></div>
                            <div className="card-body">
                                <div className='cardTxtWrap'>
                                    <h5 className="card-title bold">The P.I.G. Method Membership Site</h5>
                                    <p className="card-text">Membership site for The P.I.G. Method, a massive internet marketing training course by top internet marketer Chris "Moneyfingers" Haddad</p>
                                    <p className="card-text"><span className='bold'>Technologies used:</span>Wordpress, PHP, Javascript, HTML, CSS, Bootstrap, Git</p>
                                </div>
                                <button type="button" className="btn btn-primary projectLink" data-toggle="modal" data-target="#carouselModal">Launch Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className='cardImgWrapper'><img src={mhwylfsl} className="card-img-top img-fluid" alt="Just To Do It screenshot"/></div>
                            <div className="card-body">
                                <div className='cardTxtWrap'>
                                    <h5 className="card-title bold">MHWY Sales Page</h5>
                                    <p className="card-text">Sales funnel for Make Him Worship You. This is the sales page for an ecomerce funnel that collects customer information and uppon purchase sends them through a series of up-sell pages and then finally gives customers access to their purchased product</p>
                                    <p className="card-text"><span className='bold'>Technologies used:</span> PHP, Javascript, HTML, CSS, Bootstrap, Git</p>
                                </div>    
                                <a href="https://hewillworshiptwo.com/lfsl/?vtid=lfsl&cbtimer=108" target="_blank" rel="noreferrer" className="btn btn-primary projectLink">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className='cardImgWrapper'><img src={affiliates} className="card-img-top img-fluid" alt="Just To Do It screenshot"/></div>
                            <div className="card-body">
                                <div className='cardTxtWrap'>
                                    <h5 className="card-title bold">DRI Affiliate Site</h5>
                                    <p className="card-text">This is the affiliate site for Digital Romance Inc. This is the place where new affiliates can sign up for our program and gather promotional material</p>
                                    <p className="card-text"><span className='bold'>Technologies used:</span> Wordpress, PHP, Javascript, HTML, CSS, Bootstrap, Git, AWS S3 SDK</p>
                                </div>    
                                <a href="https://digitalromanceaffiliates.com/mhwy/" target="_blank" rel="noreferrer" className="btn btn-primary projectLink">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className='cardImgWrapper'><img src={dhlyquiz} className="card-img-top img-fluid" alt="Just To Do It screenshot"/></div>
                            <div className="card-body">
                                <div className='cardTxtWrap'>
                                    <h5 className="card-title bold">Love Quiz</h5>
                                    <p className="card-text">The Does He Love You quiz takes input from curious web surfers and dynamically  switches the questions based on answers given as well as dynamically serving up the appropriate sales content depending on answers given</p>
                                    <p className="card-text"><span className='bold'>Technologies used:</span>Javascript, HTML, CSS, Bootstrap, Git</p>
                                </div>    
                                <a href="https://doesheloveyouquiz.com/" target="_blank" rel="noreferrer" className="btn btn-primary projectLink">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className='cardImgWrapper'><img src={thepigmethod} className="card-img-top img-fluid" alt="Just To Do It screenshot"/></div>
                            <div className="card-body">
                                <div className='cardTxtWrap'>
                                    <h5 className="card-title bold">P.I.G. Sales Page</h5>
                                    <p className="card-text">Sales funnel for The P.I.G. Method. This is the sales page for an ecomerce funnel that collects customer information and uppon purchase sends them through a series of up-sell pages and then finally gives customers access to their purchased product</p>
                                    <p className="card-text"><span className='bold'>Technologies used:</span> Javascript, HTML, CSS, Bootstrap, Git</p>
                                </div>    
                                <a href="https://taylortay.com/thepigmethod/" target="_blank" rel="noreferrer" className="btn btn-primary projectLink">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div className='col'><h3 className='bold'>MORE TO COME...</h3></div>
                </div>
                <Modal />
            </div>
        </div>
    )
}