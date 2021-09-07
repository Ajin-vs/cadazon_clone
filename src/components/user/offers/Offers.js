import img1 from '../../../images/img1.jpg'
import img2 from '../../../images/img2.jpg'
import img3 from '../../../images/img3.jpg'
import img4 from '../../../images/img4.jpg'
import img5 from '../../../images/img5.jpg'
import './offer.css'
function Offers() {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1 row-cols-lg-2 mt-4 position-relative">
            <div className="col col-lg-4  ">
                <img src={img1} width="100%"/>
            </div>
            
            <div className="col col-lg-8">
                <div className="card bg-warning ">
                    <div className="row">
                        <div className="col col-lg-5 col-md-5  text-center p-5">
                            <p className="h4">No More Fitness Excuses</p>

                            <p className="h5">20% OFF on Best Home Treadmills</p>
                            <p>Shop Treadmills <i className="fas fa-chevron-right"></i></p>
                        </div>
                        <div className="col col-lg-7 col-lg-7 p-4 col-sm-12 col-12">
                            <img src={img2} width="100%"/>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-md-2 mt-5">
                    <div className="col col-lg-6">
                        <img src={img3} width="100%"/>
                    </div>
                    <div className="col col-lg-6">
                        <img src={img4} width="100%"/>
                    </div>
                </div>
            </div>

            <div className="col position-absolute bottom-0 mt-5" width="100%">
                <img src={img5} width="100%" className="mt-5"/>
            </div>  

        </div>
    )
}

export default Offers