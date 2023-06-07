import taylorResume from '../downloads/TaylorWolfResume2023.pdf'
import linkedIn from '../assets/linkedin.png'
import rightArrow from '../assets/right-arrow.png'

export default function Resume() {
    return (
        <div className="resumeWrapper">
            <div className="container">
                <div className='row mt-3 mb-3'>
                    <a href={taylorResume} download="TaylorWolfResume2023"><button type="button" className="btn btn-info">Download Resume PDF</button></a>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <h1 className="bold">TAYLOR WOLF</h1>
                        <div className="separator"></div>
                        <div><a href="https://www.linkedin.com/in/taylor-wolf-2534569/" target="_blank" rel="noreferrer"><img src={rightArrow} className='img-fluid' alt='LinkedIn Logo' width={29}/>&nbsp;<img src={linkedIn} className='img-fluid' alt='LinkedIn Logo' width={30}/></a></div>
                        <p className="resumeHeader">FRONT-END WEB DEVELOPER</p>
                        <p>Experienced front-end web developer with over 10 years of expertise in designing and developing dynamic and visually appealing websites. Proficient in HTML, CSS, and JavaScript, with a strong focus on responsive design and user-centric interfaces. Demonstrated ability to transform complex concepts into intuitive and engaging user experiences. Adept at collaborating with cross-functional teams and clients to deliver high-quality projects within deadlines. Committed to continuous learning. A reliable professional with a proven track record of delivering exceptional results.</p>
                        <div className="separator"></div>
                        <p className="resumeHeader">CORE STRENGTHS</p>
                        <ul className="strengths">
                                <li>Proficiency in the core front-end technologies</li>
                                <li>Responsive Web Design</li>
                                <li>Version Control</li>
                                <li>Performance Optimization</li>
                                <li>Problem Solving and Troubleshooting</li>
                                <li>Collaboration and Communication</li>
                                <li>Continuous learning</li>
                            </ul>
                        <div className="separator"></div>
                        <p className="resumeHeader">TECHNICAL SKILLS</p>
                        <div className="technical">
                            <p><span className="bold">Operating Systems:</span> Mac, Windows, Linux</p>
                            <p><span className="bold">Computer Languages:</span> HTML 5, Javascript, CSS 3, PHP, MySQL</p>
                            <p><span className="bold">Version Control:</span> Git, Github</p>
                            <p><span className="bold">Frameworks:</span> Foundational React JS, jQuery, Bootstrap 5</p>
                            <p><span className="bold">Development Tools:</span> VS Code, Terminal</p>
                            <p><span className="bold">Applications:</span> Wordpress, Adobe Photoshop, Adobe Illustrator, Microsoft suite, Google suite, Apple suite</p>
                        </div>
                        <div className="separator"></div>
                        <p className="resumeHeader">PROFESSIONAL EXPERIENCE</p>
                        <div className="experienceItem">
                            <p>8 years</p>
                            <p>Digital Romance Inc., Seattle, WA</p>
                            <p>Senior Tech Lead and Front-end Developer</p>
                            <br></br>
                            <p>Key Responsibilities:</p>
                            <ul>
                                <li><span className="bold">Website Management:</span> Successfully built, served, and maintained a portfolio of over 20 websites and accounts across three different servers. By leveraging Git and GitHub for a wellstructured version control system, I ensured seamless collaboration and efficient management of codebase across multiple projects. This approach facilitated easy tracking of changes, simplified issue resolution, and enabled effective rollbacks when necessary.</li>
                                <li><span className="bold">Domain Management:</span> Successfully set up DNS records and managed domains, ensuring seamless domain management and proper functioning of websites and email services. By accurately configuring DNS records, I maintained smooth operations and optimized performance for online assets. Whether it involved setting up CNAME, A, MX, or TXT records, I effectively handled domain-related tasks with meticulous attention to detail.</li>
                                <li><span className="bold">User Experience:</span> Specialized in building fully responsive websites, ensuring they seamlessly adapt to various screen sizes and devices. By employing modern front-end development techniques and frameworks, I create websites that deliver an optimal user experience across different platforms. Additionally, I prioritized building lightweight sites that load quickly, aligning with Google's guidelines for optimal website performance. Through efficient code optimization, image compression, and minification, I strove to provide fast-loading websites that enhance user engagement.</li>
                                <li><span className="bold">Custom Development:</span> Created custom templates and functionality that can be reused to significantly reduce future development time. By designing modular and reusable components, I optimized efficiency and consistency across projects. These custom templates and functions streamlined the development process, allowing for rapid implementation of common features and reducing the need for repetitive coding. Through this approach, I promoted code reusability, improved maintainability, and expedited the delivery of high-quality solutions.</li>
                                <li><span className="bold">A/B Testing:</span> Executed A/B testing with Google's latest tools, I optimize website performance and user experience. Through controlled experiments, I gathered insights to make data-driven decisions and test variations of elements using tools like Google Optimize. This iterative approach drives higher conversion rates and improved user engagement, aligning with business objectives.</li>
                                <li><span className="bold">Email Deliverability:</span> Successfully set up and managed mail accounts, including ensuring optimal deliverability by adhering to the latest requirements set by Google. By staying updated with Google's guidelines and best practices, I implemented effective strategies to improve email deliverability, such as configuring SPF, DKIM, and DMARC records</li>
                            </ul>
                        </div>
                        <div className="experienceItem">
                            <p>3 years</p>
                            <p>Covario Inc. & Rio SEO, San Diego, CA</p>
                            <p>Front-end Developer</p>
                            <br></br>
                            <p>Key Responsibilities:</p>
                            <ul>
                                <li><span className="bold">Create Store Locators:</span> Successfully created store locator sites for renowned clients, including Abercrombie & Fitch, ADT, PacSun, and more. By leveraging my expertise, I developed robust and user-friendly store locator functionalities that seamlessly integrated with their respective websites. These solutions empowered customers to easily locate nearby stores, enhancing their shopping experiences and driving foot traffic to physical retail locations.</li>
                                <li><span className="bold">High Traffic Development:</span> Designed and developed material for high-traffic websites, receiving over 400,000 unique visitors per day. By combining my skills in web design and development, I created engaging and visually appealing content that catered to the needs of a large user base. Through meticulous attention to detail and a focus on user experience, I ensured seamless navigation, fast loading times, and optimized performance for these high-traffic websites.</li>
                                <li><span className="bold">Browser Compatibility:</span> Tested and debugged websites across multiple browsers to ensure quality and efficiency. By conducting comprehensive browser compatibility testing, I verified that the websites functioned seamlessly across different browsers and operating systems. I meticulously addressed any issues or inconsistencies, ensuring a consistent and optimal user</li>
                            </ul>
                        </div>
                        <div className="separator"></div>
                        <p className="resumeHeader">EMPLOYMENT HISTORY</p>
                        <div className="technical">
                            <p>Senior Tech Lead and Front-End Web Developer Digital Romance Inc. Seattle, WA 8 Years</p>
                            <p>Front-End Web Developer Covario Inc. & Rio SEO San Diego, CA 3 Years</p>
                            <p>Front-End Web Developer La Touraine Inc. San Diego, CA 4 Years</p>
                            <p>Multimedia Designer Uptown Publications San Diego, CA 2 Years</p>
                            <p>US Soldier United States Army Fort Stewart, GA 4 Years</p>
                        </div>
                        <div className="separator"></div>
                        <p className="resumeHeader">EDUCATION & TRAINING</p>
                        <div className="technical">
                            <p className="bold">Bachelor of Science – Multi Media Design</p>
                            <p>Art Institute of California, San Diego, CA</p>
                            <br></br>
                            <p className="bold">Programming with JavaScript - 2023</p>
                            <ul>
                                <li>Issued by Meta(Facebook)</li>
                            </ul>
                            <p className="bold">React Basics - 2023</p>
                            <ul>
                                <li>Issued by Meta</li>
                            </ul>
                            <p className="bold">Advanced React - 2023</p>
                            <ul>
                                <li>Issued by Meta</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}