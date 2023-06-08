import codeImg from '../assets/htmlcssjs.png'
import bootstrapImg from '../assets/bootstrap.png'
import githubImg from '../assets/github.png'
import lighthouseImg from '../assets/googlelighthouse.png'
import jquery from '../assets/jquery.png'
import monsterImg from '../assets/monsterglasses.png'

export default function Features() {
    return (
        <div className="introWrapper section" id='home'>
            <div className="container">
                <div className='row'>
                    <div className='col monsterImgWrap'><img src={monsterImg} width={120} alt='Monster Waving Hi'/></div>
                </div>
                <div id='features' className='section'><h3 className='bold mb-4'>DEVELOPMENT FEATURES</h3></div>
                <div className="row justify-content-center mb-5">
                    <div className="col-3"><img src={codeImg} className='img-fluid' alt='html, css, javascript logos'/></div>
                    <div className="col-6">
                        <h3>Core Front-end Technologies</h3>
                        <p>A strong foundation in these core front-end technologies is essential for a front-end developer. Writing clean, semantic HTML code, styling with CSS, and implementing interactive functionalities using JavaScript showcases an ability to create well-structured and visually appealing web pages.</p>
                        <a href='#projects'><button type='button' className="btn btn-outline-info">Examples</button></a>
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-6">
                        <h3>Responsive Design</h3>
                        <p>A front-end developer who can design and develop websites that seamlessly adapt to different screen sizes and devices. Having knowledge of responsive design principles, CSS frameworks like Bootstrap, and media queries showcases an ability to create user-friendly experiences across various platforms.</p>
                        <a href='#projects'><button type='button' className="btn btn-outline-info">Examples</button></a>
                    </div>
                    <div className="col-2"><img src={bootstrapImg} className='img-fluid' alt='bootstrap logo'/></div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-2"><img src={lighthouseImg} className='img-fluid' alt='lighthouse logo'/></div>
                    <div className="col-6">
                        <h3>Performance Optimization</h3>
                        <p>A front-end developer who can optimize website performance to ensure fast load times and smooth user experiences. Familiarity with techniques like code minification, image optimization, lazy loading, and caching creates efficiency, optimized code and improves overall site performance.</p>
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-6">
                        <h3>JavaScript Frameworks/Libraries</h3>
                        <p>New to the popular JavaScript framework React JS, but familiar with other frameworks like jQuery. JavaScript frameworks allow for the development of complex, interactive web applications with reusable components and efficient data handling. This leverages modern development tools and delivers high-quality, scalable solutions.</p>
                        <a href='#projects'><button type='button' className="btn btn-outline-info">Examples</button></a>
                    </div>
                    <div className="col-2"><img src={jquery} className='img-fluid' alt="react js logo"/></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-2"><img src={githubImg} className='img-fluid' alt='github logo'/></div>
                    <div className="col-6">
                        <h3>Version Control and Collaboration</h3>
                        <p>Using version control systems like Git and collaborating with other developers using platforms like GitHub demonstrates an ability to work effectively in a team environment. It showcases an understanding of code management, collaboration workflows, and the ability to contribute to large-scale projects while maintaining code integrity and organization.</p>
                        <a href='https://github.com/taylorwinterwolf?tab=repositories' target='_blank' rel="noreferrer"><button type='button' className="btn btn-outline-info">Visit Github Repo</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}