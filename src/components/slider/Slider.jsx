import slide1 from "../../assets/img/slide-1.jpg"
import slide2 from "../../assets/img/slide-2.jpg"
import slide3 from "../../assets/img/slide-3.jpg"
const Slider = () => {

    return (
        <div>
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img
                            src={slide1}
                            className="w-100 d-block"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={slide2}
                            className="w-100 d-block"
                            alt="Second slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src={slide3}
                            className="w-100 d-block"
                            alt="Third slide"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )


}

export default Slider