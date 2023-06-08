import slide1 from '../assets/pigmembers1.png'
import slide2 from '../assets/pigmembers2.png'
import slide3 from '../assets/pigmembers3.png'

export default function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={slide1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={slide2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src={slide3} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )    
}