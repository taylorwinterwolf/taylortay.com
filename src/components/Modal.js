import Carousel from "./Carousel";

export default function Modal() {
    return (
    <div className="modal fade" role="dialog" id="carouselModal" aria-labelledby="carouselModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <Carousel/>
            </div>
        </div>
    </div>   
    )
}
