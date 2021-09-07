import c1 from '../../../images/c1.jpg'
import c2 from '../../../images/c2.jpg'
function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade mt-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={c1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={c2} className="d-block w-100" alt="..." />
                </div>
            </div>
            
        </div>
    )
}
export default Carousel