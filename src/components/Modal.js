import Carousel from "./Carousel";

export default function Modal() {
    return (
    <>
        <button type="button" className="btn btn-primary projectLink align-bottom" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch Demo
        </button>

        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        This membership requires a login, here are some screen grabs.
                    </div>
                    <Carousel />
                    <div className="modal-footer"><button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>    
                </div>
            </div>
        </div>
    </>        
    )
}
